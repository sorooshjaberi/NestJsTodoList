import { WithDate } from 'src/common/entities/withDate.entity';
import { User } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends WithDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, default: false })
  done: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
