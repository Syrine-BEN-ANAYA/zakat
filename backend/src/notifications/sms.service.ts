import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
  private client: Twilio;

  constructor() {
    const sid = process.env.TWILIO_SID;
    const token = process.env.TWILIO_TOKEN;

    if (!sid || !token) {
      throw new Error('Twilio config missing');
    }

    this.client = new Twilio(sid, token);
  }

  async sendTempPassword(phone: string, password: string) {
    return this.client.messages.create({
      body: `Temporary password: ${password}`,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });
  }
}
