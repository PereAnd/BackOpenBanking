import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrdenCompraEntity {
  @PrimaryGeneratedColumn('increment')
  idOrdenCompra: number;

  @Column()
  costoTotal: number;

  @Column()
  codigoEstado: number;

  @Column()
  codigoOTP: string;

  @Column()
  numeroAprobacion: string;

  @Column()
  observaciones: string;

  // Relaciones
  @Column()
  cliente: string;

  @Column()
  Ecommerce: string;

  @Column()
  estado: string;
}
