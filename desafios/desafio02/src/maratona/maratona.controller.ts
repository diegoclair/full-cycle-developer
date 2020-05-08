import { Controller, Get, Post, Body, ValidationPipe, Param } from '@nestjs/common';
import { CreateMaratonaDto } from './create-maratona.dto';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
    constructor(
        private readonly maratonaService: MaratonaService,
    ) {}

    @Get()
    async findAll() {
        return this.maratonaService.findAll();
    }

    @Get(':id')
    async findById(
        @Param('id') id: string,
    ) {
        return this.maratonaService.findById(id);
    }

    @Post()
    async create(
        @Body(ValidationPipe) createMaratonaDto: CreateMaratonaDto,
    ) {
        const maratona = new Maratona(createMaratonaDto.aula);

        await this.maratonaService.create(maratona);
    }
}
