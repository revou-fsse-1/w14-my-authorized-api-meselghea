import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }
  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: id }});
  }
  findByUsername(username: string, email: string) {
    return this.prisma.user.findUnique({ where: { username: username, email: email}});
  }
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
