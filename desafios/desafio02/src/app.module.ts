import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Maratona],
 }), MaratonaModule],
})
export class AppModule {}
