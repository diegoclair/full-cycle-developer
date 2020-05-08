import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMaratonaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    aula: string;
}