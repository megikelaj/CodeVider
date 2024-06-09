import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Animal extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  species: string;

  @Prop()
  family: string;

  @Prop()
  habitat: string;

  @Prop()
  place_of_found: string;

  @Prop()
  diet: string;

  @Prop()
  description: string;

  @Prop()
  weight_kg: number;

  @Prop()
  height_cm: number;

  @Prop()
  image: string;

  @Prop()
  temperament: string;

  @Prop()
  origin: string;

  @Prop([String])
  colors: string[];

  @Prop()
  breed_group: string;

  @Prop()
  size: string;

  @Prop()
  lifespan: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
