import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';
import { FetchModule } from './fetch/fetch.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Update with your MongoDB connection string
    AnimalsModule,
    FetchModule,
  ],
})
export class AppModule {}
