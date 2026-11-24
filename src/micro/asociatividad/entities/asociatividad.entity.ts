import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'asociatividades' })
export class AsociatividadEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'aso_id' })
  id: number;

  @Column({ name: 'per_id' })
  perId: number;

  @Column({ name: 'aso_nombre', nullable: true })
  nombre: string;

  @Column({ name: 'aso_fuente' })
  fuente: string;

  // Auditoría
  @Column({ name: 'aso_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'aso_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'aso_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'aso_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'aso_estado', default: 11 })
  estado: number;

  @Column({ name: 'aso_eliminado', default: false })
  eliminado: boolean;
}
