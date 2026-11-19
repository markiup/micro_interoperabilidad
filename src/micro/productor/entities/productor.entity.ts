import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
/********NOMBRE DE LA CLASE DE LA BASE DE DATOS ***********/
@Entity({ name: 'productor' })
export class Productor extends BaseEntity {
  /********NOMBRE DE LA TABLA productor_dto*******/
  @PrimaryGeneratedColumn()
  pro_id!: number;

  @Column()
  pro_tipo_doc?: string;

  @Column()
  pro_documento?: string;

  @Column()
  pro_nombres?: string;

  @Column()
  pro_fecha_nacimiento?: Date;

  @Column()
  pro_edad?: number;

  @Column()
  pro_direccion?: string;

  @Column()
  pro_terminos?: boolean;

  @Column()
  pro_acuerdo_alfc_id?: string;

  @Column()
  prod_foto_alfc_id?: string;

  @Column()
  pro_presentacion?: string;

  @Column()
  pais_id?: number;

  @Column()
  ubi_id_prov?: number;

  @Column()
  ubi_id_can?: number;

  @Column()
  ubi_id_par?: number;

  @Column()
  pro_habilitado!: boolean;

  @Column()
  pro_estado!: number;

  @Column()
  pro_eliminado!: boolean;

  @Column()
  pro_reg_usu!: number;

  @Column()
  pro_reg_fecha!: Date;

  @Column()
  pro_act_usu?: number;

  @Column()
  pro_act_fecha?: Date;
}
