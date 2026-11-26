import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'pecuarias' })
export class PecuarioEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'pec_id' })
  pec_id: number;

  @Column({ name: 'pec_bovinos', default: false, nullable: true })
  pec_bovinos: boolean;

  @Column({ name: 'pec_porcinos', default: false, nullable: true })
  pec_porcinos: boolean;

  @Column({ name: 'pec_aves', default: false, nullable: true })
  pec_aves: boolean;

  @Column({ name: 'pec_otras_especies', default: false, nullable: true })
  pec_otras_especies: boolean;

  @Column({ name: 'pec_fuente' })
  pec_fuente: string;

  @Column({ name: 'pec_numero_cedula', nullable: true })
  pec_numero_cedula: string;

  // Auditoría
  @Column({ name: 'pec_reg_usu', nullable: false, default: 1 })
  pec_reg_usu: number;

  @Column({ name: 'pec_act_fecha', type: 'timestamp', nullable: true })
  pec_act_fecha: Date = new Date();

  @Column({ name: 'pec_act_usu', nullable: true })
  pec_act_usu: number;

  @Column({
    name: 'pec_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  pec_reg_fecha: Date = new Date();

  @Column({ name: 'pec_estado', default: 11 })
  pec_estado: number;

  @Column({ name: 'pec_eliminado', default: false })
  pec_eliminado: boolean;
}
