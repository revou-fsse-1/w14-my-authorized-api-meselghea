import { Body, Post, Controller, Res,} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {Response, Request} from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
@Controller()
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post('logout')
  logout(@Res({passthrough: true}) response: Response) {
  response.clearCookie('jwt');
  return {
    message: 'success'
}
  }
}
