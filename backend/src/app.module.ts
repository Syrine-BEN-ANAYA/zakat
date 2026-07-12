import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuditLogModule } from './audit-log/audit-log.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zakat',
    ),

    AuthModule,
    UsersModule,
    AuditLogModule,
  ],
})
export class AppModule {}
