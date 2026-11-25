import { ApiProperty } from '@nestjs/swagger';

export class CultivoDto {
  @ApiProperty({
    title: 'cul_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'cul_nombre',
    description: 'Nombre del cultivo',
  })
  nombre: string;

  @ApiProperty({
    title: 'cul_superficie',
    description: 'Superficie del cultivo',
  })
  superficie: number;

  @ApiProperty({
    title: 'cul_unidad',
    description: 'Unidad de medida de la superficie',
  })
  unidad: string;

  @ApiProperty({
    title: 'cul_asociacion',
    description: 'Indica si el cultivo es solo o asociado',
  })
  asociacion: string;

  @ApiProperty({
    title: 'cul_forma',
    description: 'Forma del cultivo',
  })
  forma: string;

  @ApiProperty({
    title: 'cul_ferti_orga',
    description: 'Uso de fertilizante orgánico',
  })
  fertiOrga: boolean;

  @ApiProperty({
    title: 'cul_ferti_quim',
    description: 'Uso de fertilizante químico',
  })
  fertiQuim: boolean;

  @ApiProperty({
    title: 'cul_plag_orga',
    description: 'Uso de plaguicida orgánico',
  })
  plagOrga: boolean;

  @ApiProperty({
    title: 'cul_plag_quim',
    description: 'Uso de plaguicida químico',
  })
  plagQuim: boolean;

  @ApiProperty({
    title: 'cul_fuente',
    description: 'Fuente de origen del registro del cultivo',
  })
  fuente: string;

  @ApiProperty({
    title: 'cul_rie_fuente_agua',
    description: 'Fuente de agua para riego',
  })
  rieFuenteAgua: string;

  @ApiProperty({
    title: 'cul_rie_sistema',
    description: 'Sistema de riego utilizado',
  })
  rieSistema: string;

  @ApiProperty({
    title: 'cul_numero_cedula',
    description: 'Número de cédula del productor',
  })
  numeroCedula: string;

  @ApiProperty({
    title: 'cul_riego',
    description: 'Tipo o detalle de riego',
  })
  riego: string;

  @ApiProperty({
    title: 'cul_rie_acceso',
    description: 'Indica si tiene acceso a riego',
  })
  rieAcceso: boolean;

  @ApiProperty({
    title: 'cul_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'cul_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'cul_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'cul_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'cul_estado',
    description: '',
  })
  estado: number;

  @ApiProperty({
    title: 'cul_eliminado',
    description: '',
  })
  eliminado: boolean;
}
