import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'cultivos' })
export class CultivoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'cul_id' })
  cul_id: number;

  @Column({ name: 'cul_nombre' })
  cul_nombre: string;

  @Column({
    name: 'cul_superficie',
    type: 'numeric',
    precision: 12,
    scale: 4,
    default: 0,
    nullable: true,
  })
  cul_superficie: number;

  @Column({ name: 'cul_unidad', nullable: true })
  cul_unidad: string;

  @Column({ name: 'cul_asociacion', nullable: true })
  cul_asociacion: string;

  @Column({ name: 'cul_forma', nullable: true })
  cul_forma: string;

  @Column({ name: 'cul_ferti_orga', default: false, nullable: true })
  cul_ferti_orga: boolean;

  @Column({ name: 'cul_ferti_quim', default: false, nullable: true })
  cul_ferti_quim: boolean;

  @Column({ name: 'cul_plag_orga', default: false, nullable: true })
  cul_plag_orga: boolean;

  @Column({ name: 'cul_plag_quim', default: false, nullable: true })
  cul_plag_quim: boolean;

  @Column({ name: 'cul_fuente' })
  cul_fuente: string;

  @Column({ name: 'cul_rie_fuente_agua', nullable: true })
  cul_rie_fuente_agua: string;

  @Column({ name: 'cul_rie_sistema', nullable: true })
  cul_rie_sistema: string;

  @Column({ name: 'cul_numero_cedula', nullable: true })
  cul_numero_cedula: string;

  @Column({ name: 'cul_riego', nullable: true })
  cul_riego: string;

  @Column({ name: 'cul_rie_acceso', nullable: true })
  cul_rie_acceso: boolean;

  // Auditoría
  @Column({ name: 'cul_reg_usu', nullable: false, default: 1 })
  cul_reg_usu: number;

  @Column({ name: 'cul_act_fecha', type: 'timestamp', nullable: true })
  cul_act_fecha: Date = new Date();

  @Column({ name: 'cul_act_usu', nullable: true })
  cul_act_usu: number;

  @Column({
    name: 'cul_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  cul_reg_fecha: Date = new Date();

  @Column({ name: 'cul_estado', default: 11 })
  cul_estado: number;

  @Column({ name: 'cul_eliminado', default: false })
  cul_eliminado: boolean;
}
