import { BaseEntity } from '../base/base_entity.entity';
import { Entity, Column } from 'typeorm';

@Entity('m_users')
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'activation_date', nullable: true })
  activationDate: Date;

  @Column({ name: 'activation_status', default: 'pending' })
  activationStatus: string;

  @Column({ name: 'is_active', default: false })
  isActive: boolean;
}
