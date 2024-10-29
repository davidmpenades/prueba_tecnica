import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Clients } from './Client';
import { Marketers } from './Marketer';

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
