import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'extensiones' })
export class ExtensionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ext_id' })
  id: number;

  @Column({ name: 'ext_servicio_recibido', nullable: true })
  servicioRecibido: string;

  @Column({ name: 'ext_institucion', nullable: true })
  institucion: string;

  @Column({ name: 'ext_fecha_inicio', type: 'timestamp', nullable: true })
  fechaInicio: Date;

  @Column({ name: 'ext_fuente' })
  fuente: string;

  @Column({ name: 'ext_numero_cedula', nullable: true })
  numeroCedula: string;

  @Column({ name: 'ext_asociacion_nombre', nullable: true })
  asociacionNombre: string;

  // Auditoría
  @Column({ name: 'ext_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'ext_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'ext_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'ext_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'ext_estado', default: 11 })
  estado: number;

  @Column({ name: 'ext_eliminado', default: false })
  eliminado: boolean;
}
