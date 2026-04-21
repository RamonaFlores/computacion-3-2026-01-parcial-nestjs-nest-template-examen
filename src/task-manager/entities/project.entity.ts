import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('projects') 
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'name', type: 'varchar'})
    name: string;

    @Column({name:'description', type: 'text'})
    description: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}