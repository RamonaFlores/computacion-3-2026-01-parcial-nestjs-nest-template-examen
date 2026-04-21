import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Task} from './task.entity';


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

    @OneToMany ( () => Task, (taskassignment) => taskassignment.project)
    tasks: Task[];
}