import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
// @ is make function as a controller SO ITS CALLED DEVCORATOR

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): any[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.usersService.getUserById(Number(id));
  }
  @Post()
  createUser(
    @Body() data: { name: string; email: string; password: string },
  ): any {
    return this.usersService.createUser(data);
  }
  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() data: { name: string; email: string; password: string },
  ): any {
    return this.usersService.updateUser(Number(id), data);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): any {
    return this.usersService.deleteUser(Number(id));
  }
  @Patch(':id')
  patchUser(
    @Param('id') id: string,
    @Body() data: { name?: string; email?: string; password?: string },
  ): any {
    return this.usersService.patchUser(Number(id), data);
  }
}
