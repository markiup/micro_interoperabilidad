import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'extensiones' })
export class ExtensionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ext_id' })
  ext_id: number;

  @Column({ name: 'ext_servicio_recibido', nullable: true })
  ext_servicio_recibido: string;

  @Column({ name: 'ext_institucion', nullable: true })
  ext_institucion: string;

  @Column({ name: 'ext_fecha_inicio', type: 'timestamp', nullable: true })
  ext_fecha_inicio: Date;

  @Column({ name: 'ext_fuente' })
  ext_fuente: string;

  @Column({ name: 'ext_numero_cedula', nullable: true })
  ext_numero_cedula: string;

  @Column({ name: 'ext_asociacion_nombre', nullable: true })
  ext_asociacion_nombre: string;

  // Auditoría
  @Column({ name: 'ext_reg_usu', nullable: false, default: 1 })
  ext_reg_usu: number;

  @Column({ name: 'ext_act_fecha', type: 'timestamp', nullable: true })
  ext_act_fecha: Date = new Date();

  @Column({ name: 'ext_act_usu', nullable: true })
  ext_act_usu: number;

  @Column({
    name: 'ext_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  ext_reg_fecha: Date = new Date();

  @Column({ name: 'ext_estado', default: 11 })
  ext_estado: number;

  @Column({ name: 'ext_eliminado', default: false })
  ext_eliminado: boolean;
}
