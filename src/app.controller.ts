import { Controller, Get, UseGuards, Request  } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getHelloUser(@Request() req): string {
  return this.appService.getHello(req.user.username);
  }
}
