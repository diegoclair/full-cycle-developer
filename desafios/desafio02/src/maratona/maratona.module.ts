import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maratona])],
  controllers: [MaratonaController],
  providers: [MaratonaService]
})
export class MaratonaModule {}
