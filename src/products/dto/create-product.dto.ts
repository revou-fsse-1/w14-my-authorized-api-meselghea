import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from 'class-validator';
  
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    quantity: number;
    
    @IsString()
    @ApiProperty({ required: false, nullable: true })
    sellerName: string;
    
    @IsNumber()
    @ApiProperty({ required: false, nullable: true })
    userId: number;
}
