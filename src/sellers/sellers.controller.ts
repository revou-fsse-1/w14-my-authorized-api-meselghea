import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException, UseGuards} from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createSellerDto: CreateSellerDto) {
    return this.sellersService.create(createSellerDto);
  }
  
  @Get()
  findAll(@Query('query') query: string) {
    return this.sellersService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const seller = await this.sellersService.findOne(id);
    if (!seller) {
      throw new NotFoundException(`Seller with ${id} does not exist.`);
    }
    return seller;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSellerDto: UpdateSellerDto) {
    return this.sellersService.update(id, updateSellerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sellersService.remove(id);
  }
}
