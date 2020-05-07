import {
    Entity,
    Column,
    PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';

@Entity({name: 'maratonas'})
export class Maratona {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    aula: string;

    @CreateDateColumn({type: "timestamp"})
    created_at: Date;
}

