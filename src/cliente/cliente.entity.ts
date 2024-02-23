import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClienteEntity {
  @PrimaryGeneratedColumn('increment')
  idCliente: number;

  @Column()
  primerNombre: string;

  @Column()
  segundoNombre: string;

  @Column()
  primerApellido: string;

  @Column()
  segundoApellido: string;

  @Column()
  numeroIdentificacion: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column()
  direccion: string;

  @Column()
  IP: string;

  // Relaciones
  @Column()
  tipoIdentificacion: string;

  @Column()
  billeteraCBITBank: string;
}
