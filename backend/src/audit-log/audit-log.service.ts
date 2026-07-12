import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditLog, AuditLogDocument } from './audit-log.schema';

@Injectable()
export class AuditLogService {
  constructor(
    @InjectModel(AuditLog.name)
    private auditModel: Model<AuditLogDocument>,
  ) {}

  async create(log: {
    userId?: string;
    action: string;
    targetUserId?: string;
    ip?: string; // ✅ AJOUT ICI
  }) {
    return this.auditModel.create(log);
  }
}
