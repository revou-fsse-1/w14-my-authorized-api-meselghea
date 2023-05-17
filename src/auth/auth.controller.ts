import { Body, Post, Controller, UseGuards, Session, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Session as SessionType } from 'express-session';

@Controller()
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService ) {}
  
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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
<<<<<<< HEAD
  logout(@Session() session: SessionType, @Res() res: Response): void {
    session.destroy((err: any) => {
      if (err) {
        throw new Error(err);
      }
    });
    res.clearCookie('connect.sid');
    res.send();
  }
}
