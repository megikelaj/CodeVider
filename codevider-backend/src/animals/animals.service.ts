import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from './animal.schema';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}

  async create(animal: Animal): Promise<Animal> {
    const newAnimal = new this.animalModel(animal);
    return newAnimal.save();
  }

  async findAll(): Promise<Animal[]> {
    return this.animalModel.find().exec();
  }

  async findOne(id: string): Promise<Animal> {
    return this.animalModel.findById(id).exec();
  }

  async update(id: string, animal: Animal): Promise<Animal> {
    return this.animalModel.findByIdAndUpdate(id, animal, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.animalModel.deleteOne({ _id: id }).exec();
  }

  async searchByName(name: string): Promise<Animal[]> {
    return this.animalModel
      .find({ name: { $regex: name, $options: 'i' } })
      .exec();
  }
}
