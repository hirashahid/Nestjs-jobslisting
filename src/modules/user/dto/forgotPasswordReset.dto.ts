import { IsString, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class ForgotPasswordResetDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/, {
    message: 'Password must contain alphabet,numbers and special characters',
  })
  newPassword: string;
}
