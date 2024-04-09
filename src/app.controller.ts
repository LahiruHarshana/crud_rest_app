import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User){
    return this.appService.createUser(userDto)
  }

  @Get()
  async readUser(){
    return this.appService.readUser()
  }

  @Put()
  async updateUser(@Param('id') id :string, @Body() userDto: User): Promise<User>{
    return this.appService.updateUser(id, userDto)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id :string): Promise<User>{
    return this.appService.deleteUser(id)
  }
}
