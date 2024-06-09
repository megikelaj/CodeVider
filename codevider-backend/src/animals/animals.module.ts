import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { Animal, AnimalSchema } from './animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports: [MongooseModule], // Export MongooseModule so FetchModule can use it
})
export class AnimalsModule {}
