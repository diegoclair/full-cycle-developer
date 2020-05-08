import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class Maratona {
    @PrimaryColumn({ type: 'uuid' })
    private id: string;

    @Column('varchar')
    private aula: string;

    constructor(aula: string) {
        this.id = uuid();
        this.aula = aula;
    }

    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getAula() {
        return this.aula;
    }
}