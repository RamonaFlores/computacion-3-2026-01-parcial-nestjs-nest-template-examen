import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {User} from './user.entity';
import { Task } from './task.entity';
export enum Status {
    IN_PROGRESS = 1,
    REVIEW = 2,
    DONE = 3,
}
export class TaskAssignment{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User , (user) => user.taskAssignments, {nullable : false})
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Task , (task) => task.taskAssignments, {nullable : false})
    @JoinColumn({ name: 'task_id'})
    task: Task

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}