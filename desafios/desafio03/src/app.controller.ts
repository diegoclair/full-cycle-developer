import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  getIndex() {}

  @Get('sender')
  @Render('sender')
  getSender() {}

  @Get('receiver')
  @Render('receiver')
  getReceiver() {}
}
