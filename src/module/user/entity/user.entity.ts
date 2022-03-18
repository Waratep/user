import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userId: string;

  @Column()
  displayName: string;

  @Column()
  pictureUrl: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
