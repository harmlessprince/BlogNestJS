import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  mobileNumber: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(250)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(250)
  password: string;

  @IsString()
  @IsOptional()
  @MinLength(200)
  intro: string | null;
  @IsString()
  @IsOptional()
  @MaxLength(250)
  profile: string | null;
}
