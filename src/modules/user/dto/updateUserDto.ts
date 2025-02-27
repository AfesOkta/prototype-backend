import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmpty,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmpty()
  activationDate: Date;

  @IsEmpty()
  activationStatus: string;
  isActive: boolean;
}
