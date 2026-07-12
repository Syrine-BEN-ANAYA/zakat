import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuditLogDocument = AuditLog & Document;

@Schema({ timestamps: true })
export class AuditLog {
  @Prop()
  userId?: string;

  @Prop()
  action!: string;

  @Prop()
  targetUserId?: string;

  @Prop()
  ip?: string; // ✅ AJOUT IMPORTANT
}

export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);
