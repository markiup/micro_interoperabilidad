import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'personas' })
export class PersonaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'per_id' })
  id: number;

  @Column({ name: 'per_numero_cedula' })
  numeroCedula: string;

  @Column({ name: 'per_tipo_persona', nullable: true })
  tipoPersona: string;

  @Column({
    name: 'per_fecha_actualizacion',
    type: 'timestamp',
    nullable: true,
  })
  fechaActualizacion: Date;

  @Column({ name: 'per_telefono_fijo', nullable: true })
  telefonoFijo: string;

  @Column({ name: 'per_telefono_celular', nullable: true })
  telefonoCelular: string;

  @Column({ name: 'per_telefono_celular_info', nullable: true })
  telefonoCelularInfo: string;

  @Column({ name: 'per_correo_electronico', nullable: true })
  correoElectronico: string;

  @Column({ name: 'per_fuente' })
  fuente: string;

  // Auditoría
  @Column({ name: 'per_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'per_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'per_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'per_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'per_estado', default: 11 })
  estado: number;

  @Column({ name: 'per_eliminado', default: false })
  eliminado: boolean;
}
