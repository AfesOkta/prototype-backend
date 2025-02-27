import { Controller, UseGuards } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({
    summary: 'CREATE USER',
    description:
      'Private endpoint to Create a new User. It is allowed only by "admin" users, and allows the creation of users with "admin" Role.',
  })
  @ApiResponse({ status: 201, description: 'Created', type: User })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({
    summary: 'GET ALL USERS',
    description:
      'Private endpoint to list all Users. It is allowed only by "admin" users.',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: User, isArray: true })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async findAll() {
    return await this.userService.findAll();
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({
    summary: 'GET USER BY ID',
    description:
      'Private endpoint to get user data by a specific ID. <ul><li>The "user" role is permitted to access only their own information.</li><li>The "admin" role has the privilege to access information of any user</li></ul>',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: User })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  @ApiOperation({
    summary: 'UPDATE USER BY ID',
    description:
      'Private endpoint to update user data by Id. <ul><li>The "user" role is permitted to update only their own information.</li><li>The "admin" role has the privilege to update information of any user</li><li>Only the "admin" role can update the "role" field</li></ul>',
  })
  @ApiResponse({ status: 200, description: 'Ok', type: User })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({
    summary: 'DELETE USER BY ID',
    description:
      'Private endpoint to delete user by Id. <ul><li>The "user" role is permitted to remove only their own information.</li><li>The "admin" role has the privilege to delete any user</li></ul>',
  })
  @ApiOkResponse({
    content: { 'application/json': { example: { message: 'User deleted' } } },
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async remove(@Param('id') id: number) {
    return await this.userService.remove(id);
  }
}
