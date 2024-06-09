import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from '../animals/animal.schema';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FetchService {
  private readonly logger = new Logger(FetchService.name);

  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Animal.name) private readonly animalModel: Model<Animal>,
  ) {}

  async fetchAndSaveData(): Promise<void> {
    const urls = [
      'https://freetestapi.com/api/v1/birds',
      'https://freetestapi.com/api/v1/dogs',
      'https://freetestapi.com/api/v1/cats',
    ];

    for (const url of urls) {
      const response = await firstValueFrom(this.httpService.get(url));
      const animals = response.data;

      for (const animal of animals) {
        delete animal.id; // Remove the id field
        console.log(animal);
        const newAnimal = new this.animalModel({
          ...animal,
          type: this.extractTypeFromUrl(url),
        });
        await newAnimal.save();
      }
    }
    this.logger.log('Data fetching and saving completed.');
  }

  private extractTypeFromUrl(url: string): string {
    if (url.includes('birds')) {
      return 'Bird';
    } else if (url.includes('dogs')) {
      return 'Dog';
    } else if (url.includes('cats')) {
      return 'Cat';
    } else {
      return 'Unknown';
    }
  }
}
