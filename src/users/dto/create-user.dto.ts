import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, Matches, IsEmail} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsEmail()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    password: string;
}