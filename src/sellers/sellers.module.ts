import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [SellersController],
  providers: [SellersService],
  imports: [PrismaModule],
})
export class SellersModule {}
