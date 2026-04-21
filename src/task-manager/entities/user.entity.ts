import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {TaskAssignment} from './task_assignment.entity';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'name', type: 'varchar'})
    name: string;

    @Column({name:'email', type: 'varchar'})
    email: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany ( () => TaskAssignment, (taskassignment) => taskassignment.user)
    taskAssignments: TaskAssignment[];

}