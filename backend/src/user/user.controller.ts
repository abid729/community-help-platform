import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() body: { name: string; email: string; password: string; role: string }) {
    return this.userService.register(body);
  }
}
