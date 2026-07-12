import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from '../schemas/user.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
