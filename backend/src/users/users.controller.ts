import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { Roles } from '../roles/roles.decorator';
import { Role } from './schemas/user.schema';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ========================
  // CREATE USER (ADMIN ONLY)
  // ========================
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto.username, dto.role);
  }

  // ========================
  // GET ALL USERS
  // ========================
  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // ========================
  // GET USER BY ID
  // ========================
  @Roles(Role.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  // ========================
  // UPDATE USER (USERNAME + ROLE ONLY)
  // ========================
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  // ========================
  // RESET PASSWORD (ADMIN ONLY)
  // ========================
  @Roles(Role.ADMIN)
  @Post(':id/reset-password')
  resetPassword(@Param('id') id: string) {
    return this.usersService.resetPassword(id);
  }

  // ========================
  // DELETE USER (ADMIN ONLY)
  // ========================
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
