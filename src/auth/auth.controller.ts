import { Body, Post, Controller, Res, Get, UseGuards, Req, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { Response, Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller()
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login')
  async login(@Req() req, @Res() res, @Body() dto: LoginDto) {
    return this.authService.login(dto, req, res);
  }

  @Get('logout')
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res);
  }
}

