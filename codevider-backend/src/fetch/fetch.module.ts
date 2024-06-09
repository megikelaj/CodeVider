import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetchService } from './fetch.service';
import { FetchController } from './fetch.controller';
import { AnimalsModule } from '../animals/animals.module';

@Module({
  imports: [HttpModule, AnimalsModule],
  controllers: [FetchController],
  providers: [FetchService],
})
export class FetchModule {}
