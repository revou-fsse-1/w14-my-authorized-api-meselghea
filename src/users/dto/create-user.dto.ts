import { ApiProperty } from '@nestjs/swagger';
import { match } from 'assert';
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
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;
}