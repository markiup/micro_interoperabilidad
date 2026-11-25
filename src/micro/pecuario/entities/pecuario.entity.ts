import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sc_interoperabilidad', name: 'pecuarias' })
export class PecuariaEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'pec_id' })
  id: number;

  @Column({ name: 'pec_bovinos', default: false, nullable: true })
  bovinos: boolean;

  @Column({ name: 'pec_porcinos', default: false, nullable: true })
  porcinos: boolean;

  @Column({ name: 'pec_aves', default: false, nullable: true })
  aves: boolean;

  @Column({ name: 'pec_otras_especies', default: false, nullable: true })
  otrasEspecies: boolean;

  @Column({ name: 'pec_fuente' })
  fuente: string;

  @Column({ name: 'pec_numero_cedula', nullable: true })
  numeroCedula: string;

  // Auditoría
  @Column({ name: 'pec_reg_usu', nullable: false, default: 1 })
  regUsuario: number;

  @Column({ name: 'pec_act_fecha', type: 'timestamp', nullable: true })
  actFecha: Date = new Date();

  @Column({ name: 'pec_act_usu', nullable: true })
  actUsuario: number;

  @Column({
    name: 'pec_reg_fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  regFecha: Date = new Date();

  @Column({ name: 'pec_estado', default: 11 })
  estado: number;

  @Column({ name: 'pec_eliminado', default: false })
  eliminado: boolean;
}
