import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Maratona} from "./maratona.model";
import {MaratonaController} from "./maratona.controller";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
    ],
    controllers: [
        MaratonaController
    ],
    providers: [
        ConfigService
    ]
})
export class MaratonaModule {}
