import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn , OneToMany} from 'typeorm';
import { TaskAssignment } from './task_assignment.entity';
export enum Status {
    IN_PROGRESS = 1,
    REVIEW = 2,
    DONE = 3,
}
export class Task{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:'title', type: 'varchar'})
    title: string;

    @Column({name:'description', type: 'text'})
    description: string;

    @Column({name: 'status',type: 'int'})
    status: Status;
    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany ( () => TaskAssignment, (taskassignment) => taskassignment.user)
    taskAssignments: TaskAssignment[];
}