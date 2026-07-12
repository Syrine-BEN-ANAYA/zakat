import { IsEnum, IsString } from 'class-validator';
import { Role } from '../schemas/user.schema';

export class CreateUserDto {
  @IsString()
  username!: string;

  @IsEnum(Role)
  role!: Role;
}
