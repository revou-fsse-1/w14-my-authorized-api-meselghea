import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, Matches, IsEmail} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;
}