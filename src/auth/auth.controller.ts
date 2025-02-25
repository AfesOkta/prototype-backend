import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<void> {
    console.log('Registering user:', registerDto);
    return this.authService.register(registerDto);
  }
}
