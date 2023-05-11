import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateSellerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    createby: string;
}
