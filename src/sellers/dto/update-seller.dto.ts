import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength} from 'class-validator';

export class UpdateSellerDto {
    @IsString()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
}
