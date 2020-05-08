import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaratonaService {
    constructor (
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>,
    ) {}

    async findAll() {
        return this.maratonaRepository.find();
    }

    async findById(id: string) {
        return this.maratonaRepository.findOne(id);
    }

    async create(maratona: Maratona) {
        await this.maratonaRepository.save(maratona);
    }
}
