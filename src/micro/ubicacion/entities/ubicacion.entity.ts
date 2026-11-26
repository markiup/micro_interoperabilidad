import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'ubicaciones' })
export class UbicacionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ubi_id' })
  ubi_id: number;

  @Column({ name: 'ubi_bol_id', nullable: true })
  ubi_bol_id: number;

  @Column({ name: 'ubi_provincia_registro', nullable: true })
  ubi_provincia_registro: string;

  @Column({ name: 'ubi_canton_registro', nullable: true })
  ubi_canton_registro: string;

  @Column({ name: 'ubi_parroquia_registro', nullable: true })
  ubi_parroquia_registro: string;

  @Column({ name: 'ubi_provincia_residencia', nullable: true })
  ubi_provincia_residencia: string;

  @Column({ name: 'ubi_canton_residencia', nullable: true })
  ubi_canton_residencia: string;

  @Column({ name: 'ubi_parroquia_residencia', nullable: true })
  ubi_parroquia_residencia: string;

  @Column({
    name: 'ubi_distancia_domicilio',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  ubi_distancia_domicilio: number;

  @Column({ name: 'ubi_fuente' })
  ubi_fuente: string;

  @Column({ name: 'ubi_numero_cedula', nullable: true })
  ubi_numero_cedula: string;

  // Auditoría
  @Column({ name: 'ubi_reg_usu', nullable: false, default: 1 })
  ubi_reg_usu: number;

  @Column({ name: 'ubi_act_fecha', type: 'timestamp', nullable: true })
  ubi_act_fecha: Date = new Date();

  @Column({ name: 'ubi_act_usu', nullable: true })
  ubi_act_usu: number;

  @Column({
    name: 'ubi_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  ubi_reg_fecha: Date = new Date();

  @Column({ name: 'ubi_estado', default: 11 })
  ubi_estado: number;

  @Column({ name: 'ubi_eliminado', default: false })
  ubi_eliminado: boolean;
}
