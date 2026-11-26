import { ApiProperty } from '@nestjs/swagger';

export class PecuariaDto {
  @ApiProperty({
    title: 'pec_id',
    description: 'Identificador secuencial de la tabla',
  })
  pec_id: number;

  @ApiProperty({
    title: 'pec_bovinos',
    description: 'Indica presencia de bovinos',
  })
  pec_bovinos: boolean;

  @ApiProperty({
    title: 'pec_porcinos',
    description: 'Indica presencia de porcinos',
  })
  pec_porcinos: boolean;

  @ApiProperty({
    title: 'pec_aves',
    description: 'Indica presencia de aves',
  })
  pec_aves: boolean;

  @ApiProperty({
    title: 'pec_otras_especies',
    description: 'Indica presencia de otras especies pecuarias',
  })
  pec_otras_especies: boolean;

  @ApiProperty({
    title: 'pec_fuente',
    description: 'Fuente de origen del registro pecuario',
  })
  pec_fuente: string;

  @ApiProperty({
    title: 'pec_numero_cedula',
    description: 'Número de cédula del productor',
  })
  pec_numero_cedula: string;

  @ApiProperty({
    title: 'pec_reg_usu',
    description: '',
  })
  pec_reg_usu: number;

  @ApiProperty({
    title: 'pec_reg_fecha',
    description: '',
  })
  pec_reg_fecha: Date = new Date();

  @ApiProperty({
    title: 'pec_act_usu',
    description: '',
  })
  pec_act_usu: number;

  @ApiProperty({
    title: 'pec_act_fecha',
    description: '',
  })
  pec_act_fecha: Date = new Date();

  @ApiProperty({
    title: 'pec_estado',
    description: '',
  })
  pec_estado: number;

  @ApiProperty({
    title: 'pec_eliminado',
    description: '',
  })
  pec_eliminado: boolean;
}
