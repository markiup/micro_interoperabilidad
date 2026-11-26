import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'personas' })
export class PersonaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'per_id' })
  per_id: number;

  @Column({ name: 'per_numero_cedula' })
  per_numero_cedula: string;

  @Column({ name: 'per_tipo_persona', nullable: true })
  per_tipo_persona: string;

  @Column({
    name: 'per_fecha_actualizacion',
    type: 'timestamp',
    nullable: true,
  })
  per_fecha_actualizacion: Date;

  @Column({ name: 'per_telefono_fijo', nullable: true })
  per_telefono_fijo: string;

  @Column({ name: 'per_telefono_celular', nullable: true })
  per_telefono_celular: string;

  @Column({ name: 'per_telefono_celular_info', nullable: true })
  per_telefono_celular_info: string;

  @Column({ name: 'per_correo_electronico', nullable: true })
  per_correo_electronico: string;

  @Column({ name: 'per_fuente' })
  per_fuente: string;

  // Auditoría
  @Column({ name: 'per_reg_usu', nullable: false, default: 1 })
  per_reg_usu: number;

  @Column({ name: 'per_act_fecha', type: 'timestamp', nullable: true })
  per_act_fecha: Date = new Date();

  @Column({ name: 'per_act_usu', nullable: true })
  per_act_usu: number;

  @Column({
    name: 'per_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  per_reg_fecha: Date = new Date();

  @Column({ name: 'per_estado', default: 11 })
  per_estado: number;

  @Column({ name: 'per_eliminado', default: false })
  per_eliminado: boolean;
}
