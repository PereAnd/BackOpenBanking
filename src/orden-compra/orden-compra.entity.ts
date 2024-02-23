import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrdenCompraEntity {
  @PrimaryGeneratedColumn('increment')
  idOrdenCompra: number;

  @Column()
  costoTotal: number;

  @Column()
  estado: string;

  @Column()
  codigoEstado: number;

  @Column()
  codigoOTP: string;

  @Column()
  numeroAprobacion: string;

  @Column()
  observaciones: string;
}
