import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AuditLogService } from './audit-log.service';

@Injectable()
export class AuditLogInterceptor implements NestInterceptor {
  constructor(private auditLog: AuditLogService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    const user = req.user;
    const userId = user?.userId;

    const method = req.method;
    const url = req.originalUrl || req.url;
    const ip = req.ip;

    const action = `${method} ${url}`;

    return next.handle().pipe(
      tap(() => {
        this.auditLog.create({
          userId,
          action,
          ip,
        });
      }),
    );
  }
}
