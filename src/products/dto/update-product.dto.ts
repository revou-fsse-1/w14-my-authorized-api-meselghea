import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength} from 'class-validator';
  
export class UpdateProductDto {
    @IsString()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    
    @IsNumber()
    @ApiProperty()
    @MinLength(5)
    price: number;
    
    @IsNumber()
    @ApiProperty()
    @MinLength(5)
    quantity: number;
    
    @IsNumber()
    @ApiProperty()
    sellerId: number;
}