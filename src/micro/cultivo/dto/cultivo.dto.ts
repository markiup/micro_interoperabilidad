import { ApiProperty } from '@nestjs/swagger';

export class CultivoDto {
  @ApiProperty({
    title: 'cul_id',
    description: 'Identificador secuencial de la tabla',
  })
  cul_id: number;

  @ApiProperty({
    title: 'cul_nombre',
    description: 'Nombre del cultivo',
  })
  cul_nombre: string;

  @ApiProperty({
    title: 'cul_superficie',
    description: 'Superficie del cultivo',
  })
  cul_superficie: number;

  @ApiProperty({
    title: 'cul_unidad',
    description: 'Unidad de medida de la superficie',
  })
  cul_unidad: string;

  @ApiProperty({
    title: 'cul_asociacion',
    description: 'Indica si el cultivo es solo o asociado',
  })
  cul_asociacion: string;

  @ApiProperty({
    title: 'cul_forma',
    description: 'Forma del cultivo',
  })
  cul_forma: string;

  @ApiProperty({
    title: 'cul_ferti_orga',
    description: 'Uso de fertilizante orgánico',
  })
  cul_ferti_orga: boolean;

  @ApiProperty({
    title: 'cul_ferti_quim',
    description: 'Uso de fertilizante químico',
  })
  cul_ferti_quim: boolean;

  @ApiProperty({
    title: 'cul_plag_orga',
    description: 'Uso de plaguicida orgánico',
  })
  cul_plag_orga: boolean;

  @ApiProperty({
    title: 'cul_plag_quim',
    description: 'Uso de plaguicida químico',
  })
  cul_plag_quim: boolean;

  @ApiProperty({
    title: 'cul_fuente',
    description: 'Fuente de origen del registro del cultivo',
  })
  cul_fuente: string;

  @ApiProperty({
    title: 'cul_rie_fuente_agua',
    description: 'Fuente de agua para riego',
  })
  cul_rie_fuente_agua: string;

  @ApiProperty({
    title: 'cul_rie_sistema',
    description: 'Sistema de riego utilizado',
  })
  cul_rie_sistema: string;

  @ApiProperty({
    title: 'cul_numero_cedula',
    description: 'Número de cédula del productor',
  })
  cul_numero_cedula: string;

  @ApiProperty({
    title: 'cul_riego',
    description: 'Tipo o detalle de riego',
  })
  cul_riego: string;

  @ApiProperty({
    title: 'cul_rie_acceso',
    description: 'Indica si tiene acceso a riego',
  })
  cul_rie_acceso: boolean;

  @ApiProperty({
    title: 'cul_reg_usu',
    description: '',
  })
  cul_reg_usu: number;

  @ApiProperty({
    title: 'cul_reg_fecha',
    description: '',
  })
  cul_reg_fecha: Date = new Date();

  @ApiProperty({
    title: 'cul_act_usu',
    description: '',
  })
  cul_act_usu: number;

  @ApiProperty({
    title: 'cul_act_fecha',
    description: '',
  })
  cul_act_fecha: Date = new Date();

  @ApiProperty({
    title: 'cul_estado',
    description: '',
  })
  cul_estado: number;

  @ApiProperty({
    title: 'cul_eliminado',
    description: '',
  })
  cul_eliminado: boolean;
}
