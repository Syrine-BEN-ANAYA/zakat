import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum Role {
  MERCHANT = 'التاجر الشريك',
  DISTRIBUTOR = 'موزع الطرود',
  ADMIN = 'مدير النظام',
  DEPUTY = 'نائب المدير',
  ACCOUNTANT = 'المحاسب',
  DATA_ENTRY = 'مدخل بيانات',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ unique: true })
  username!: string;

  @Prop()
  password!: string;

  @Prop({ enum: Role })
  role!: Role;

  @Prop({ default: true })
  mustChangePassword!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
