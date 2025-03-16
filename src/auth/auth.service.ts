import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { RegisterDto } from './dto/registerDto';
import * as bcrypt from 'bcrypt';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(username, password);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<any> {
    const { username, password } = registerDto;
    try {
      if (!password) {
        throw new Error('Password is required');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      return this.userService.create({
        username,
        password: hashedPassword,
        email: username,
        firstName: 'John',
        lastName: 'Doe',
      });
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      }
      throw error;
    }
  }

  async logout(token: string): Promise<void> {
    const tokenExpiry = 60 * 60 * 24; // 1 hari (sesuai dengan waktu JWT)

    await this.redis.set(`blacklist:${token}`, '1', 'EX', tokenExpiry);
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const isBlacklisted = await this.redis.get(`blacklist:${token}`);
    return isBlacklisted !== null;
  }
}
