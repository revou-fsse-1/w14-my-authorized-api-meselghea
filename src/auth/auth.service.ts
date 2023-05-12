import {
  Injectable, ForbiddenException, BadRequestException,
}
from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
//import { ConfigService } from '@nestjs/config';
import { AuthEntity } from './entity/auth.entity';
import { jwtSecret } from './auth.module';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
const saltRounds = 10;

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private user: UsersService,) {}
  
  async signup(createUserDto: CreateUserDto ) {
     const salt = await bcrypt.genSalt(saltRounds);
     const hashedPassword = await bcrypt.hash( createUserDto.password, salt );

    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async login(dto: LoginDto, req: Request, res: Response ) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials');
    }

    const compareSuccess = await bcrypt.compare(
      password, foundUser.password
    );

    if (!compareSuccess) {
      throw new BadRequestException('Wrong credentials');
    }

    const token = await this.signToken({ userId: foundUser.id,
      email: foundUser.email
    });

    if (!token) {
      throw new ForbiddenException('Could not signin');
    }

    res.cookie('token', token, {});

    return res.send({ message: 'Logged in succefully' });
  }
  async signout(req: Request, res: Response) {
    res.clearCookie('token');

    return res.send({ message: 'Logged out succefully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePasswords(args: { hash: string; password: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { userId: number; email: string }) {
    const payload = {
      id: args.userId,
      email: args.email,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: jwtSecret,
    });

    return token;
  }
}