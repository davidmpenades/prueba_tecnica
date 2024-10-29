import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Marketers } from './Marketer';
import { Clients } from './Client';

@Entity()
export class Operations {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Marketers, (marketer) => marketer.operations, {
    eager: true,
  })
  marketer: Marketers;

  @ManyToOne(() => Clients, (client) => client.operations, { eager: true })
  client!: Clients;

  @Column()
  client_id: number;

  @Column({ type: 'enum', enum: ['compra', 'venta'] })
  type: 'compra' | 'venta';

  @Column('decimal')
  amount: number;

  @Column('decimal')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
