import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'cultivos' })
export class CultivoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'cul_id' })
  id: number;

  @Column({ name: 'per_id' })
  perId: number;

  @Column({ name: 'ubi_id', nullable: true })
  ubiId: number;

  @Column({ name: 'cul_nombre' })
  nombre: string;

  @Column({
    name: 'cul_superficie',
    type: 'numeric',
    precision: 12,
    scale: 4,
    default: 0,
    nullable: true,
  })
  superficie: number;

  @Column({ name: 'cul_unidad', nullable: true })
  unidad: string;

  @Column({ name: 'cul_asociacion', nullable: true })
  asociacion: string;

  @Column({ name: 'cul_forma', nullable: true })
  forma: string;

  @Column({ name: 'cul_ferti_orga', default: false, nullable: true })
  fertiOrga: boolean;

  @Column({ name: 'cul_ferti_quim', default: false, nullable: true })
  fertiQuim: boolean;

  @Column({ name: 'cul_plag_orga', default: false, nullable: true })
  plagOrga: boolean;

  @Column({ name: 'cul_plag_quim', default: false, nullable: true })
  plagQuim: boolean;

  @Column({ name: 'cul_fuente' })
  fuente: string;

  @Column({ name: 'cul_rie_fuente_agua', nullable: true })
  rieFuenteAgua: string;

  @Column({ name: 'cul_rie_sistema', nullable: true })
  rieSistema: string;

  // Auditoría
  @Column({ name: 'cul_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'cul_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'cul_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'cul_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'cul_estado', default: 11 })
  estado: number;

  @Column({ name: 'cul_eliminado', default: false })
  eliminado: boolean;
}
