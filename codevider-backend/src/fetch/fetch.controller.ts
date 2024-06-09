import { Controller, Post } from '@nestjs/common';
import { FetchService } from './fetch.service';

@Controller('fetch')
export class FetchController {
  constructor(private readonly fetchService: FetchService) {}

  @Post('populate')
  async populateDatabase() {
    await this.fetchService.fetchAndSaveData();
    return { message: 'Database population started!!!' };
  }
}
