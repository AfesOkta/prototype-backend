import {
  Controller,
  Post,
  UseGuards,
  Body,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerDto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<void> {
    console.log('Registering user:', registerDto);
    return this.authService.register(registerDto);
  }

  @UseGuards(AuthGuard('jwt')) // Pastikan user sudah login
  @Post('logout')
  async logout(@Req() req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is required');
    }

    await this.authService.logout(token);
    return { message: 'Logout successful' };
  }
}
