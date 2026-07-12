import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument, Role } from './schemas/user.schema';
import { randomBytes } from 'crypto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // =========================
  // CREATE USER (ADMIN ONLY)
  // =========================
async create(username: string, role: Role) {
  const tempPassword = randomBytes(6).toString('hex');
  const hashed = await bcrypt.hash(tempPassword, 10);

  const user = await this.userModel.create({
    username,
    password: hashed,
    role,
    mustChangePassword: true,
  });

  const isDev = process.env.NODE_ENV !== 'production';

  return {
    user: {
      id: user._id,
      username: user.username,
        role: user.role,
    },

    ...(isDev && { tempPassword }), // 🔥 DEV ONLY
  };
}
  // =========================
  // UPDATE USER (SAFE)
  // =========================
  async update(userId: string, dto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(
        userId,
        {
          $set: {
            username: dto.username,
            role: dto.role,
          },
        },
        { new: true },
      )
      .select('-password');
  }

  // =========================
  // GET ALL USERS
  // =========================
  async findAll() {
    return this.userModel.find().select('-password');
  }

  // =========================
  // GET USER BY ID
  // =========================
  async findById(id: string) {
    return this.userModel.findById(id).select('-password');
  }

  // =========================
  // FIND BY USERNAME
  // =========================
  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  // =========================
  // DELETE USER
  // =========================
  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  // =========================
  // RESET PASSWORD (ADMIN)
  // =========================
  async resetPassword(userId: string) {
    const tempPassword = randomBytes(6).toString('hex');

    const hashed = await bcrypt.hash(tempPassword, 10);

    await this.userModel.findByIdAndUpdate(userId, {
      password: hashed,
      mustChangePassword: true,
    });

    // ❗ retourne uniquement pour SMS/email, pas stockage DB
    return { tempPassword };
  }

  // =========================
  // CHANGE PASSWORD (USER)
  // =========================
  async changePassword(userId: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    await this.userModel.findByIdAndUpdate(userId, {
      password: hashed,
      mustChangePassword: false,
    });

    return { success: true };
  }
}
