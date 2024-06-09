import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animal.schema';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  async create(@Body() animal: Animal) {
    return this.animalsService.create(animal);
  }

  @Get()
  async findAll() {
    return this.animalsService.findAll();
  }

  @Get('search')
  async searchByName(@Query('name') name: string) {
    return this.animalsService.searchByName(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() animal: Animal) {
    return this.animalsService.update(id, animal);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.animalsService.delete(id);
  }
}
