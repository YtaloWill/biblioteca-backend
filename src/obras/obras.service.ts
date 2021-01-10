import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateObraDto } from './dto/create-obra.dto';
import { UpdateObraDto } from './dto/update-obra.dto';
import { Obra } from './schemas/obras.interface';

@Injectable()
export class ObrasService {

  constructor(
    @Inject('OBRA_MODEL')
    private obraModel: Model<Obra>,
  ){}

  create(createObraDto: CreateObraDto): Promise<Obra> {
    const obra = new this.obraModel(createObraDto);
    return obra.save();
  }

  findAll(): Promise<Obra[]> {
    return this.obraModel.find().exec();
  }

  update(id: string, updateObraDto: UpdateObraDto): Promise<Obra> {
    const query = { _id: id };
    return this.obraModel.findByIdAndUpdate(query, updateObraDto, { useFindAndModify: false, new: true }).exec();
  }

  remove(id: string): Promise<Obra> {
    const query = { _id: id };
    return this.obraModel.findOneAndDelete(query, { useFindAndModify: false }).exec();
  }
}
