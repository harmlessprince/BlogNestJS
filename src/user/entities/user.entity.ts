import { classToPlain, Exclude, instanceToPlain } from 'class-transformer';
import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  Unique,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column({ name: 'mobile_number' })
  mobileNumber: string;
  @Column({ unique: true })
  email: string;
  @Exclude()
  @Column()
  password: string;
  @Column({ name: 'last_login', nullable: true })
  lastLogin: Date;
  @Column({ default: null, nullable: true, type: 'text' })
  intro: string | null;
  @Column({ default: '', nullable: true })
  profile: string | null;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toJson() {
    return instanceToPlain(this);
  }
  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}
