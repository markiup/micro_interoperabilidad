import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'ubicaciones' })
export class UbicacionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ubi_id' })
  id: number;

  @Column({ name: 'ubi_bol_id', nullable: true })
  bolId: number;

  @Column({ name: 'ubi_provincia_registro', nullable: true })
  provinciaRegistro: string;

  @Column({ name: 'ubi_canton_registro', nullable: true })
  cantonRegistro: string;

  @Column({ name: 'ubi_parroquia_registro', nullable: true })
  parroquiaRegistro: string;

  @Column({ name: 'ubi_provincia_residencia', nullable: true })
  provinciaResidencia: string;

  @Column({ name: 'ubi_canton_residencia', nullable: true })
  cantonResidencia: string;

  @Column({ name: 'ubi_parroquia_residencia', nullable: true })
  parroquiaResidencia: string;

  @Column({
    name: 'ubi_distancia_domicilio',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  distanciaDomicilio: number;

  @Column({ name: 'ubi_fuente' })
  fuente: string;

  @Column({ name: 'ubi_numero_cedula', nullable: true })
  numeroCedula: string;

  // Auditoría
  @Column({ name: 'ubi_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'ubi_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'ubi_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'ubi_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'ubi_estado', default: 11 })
  estado: number;

  @Column({ name: 'ubi_eliminado', default: false })
  eliminado: boolean;
}
