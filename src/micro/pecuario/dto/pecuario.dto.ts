import { ApiProperty } from '@nestjs/swagger';

export class PecuariaDto {
  @ApiProperty({
    title: 'pec_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'per_id',
    description: 'Identificador de la persona asociada',
  })
  perId: number;

  @ApiProperty({
    title: 'pec_bovinos',
    description: 'Indica presencia de bovinos',
  })
  bovinos: boolean;

  @ApiProperty({
    title: 'pec_porcinos',
    description: 'Indica presencia de porcinos',
  })
  porcinos: boolean;

  @ApiProperty({
    title: 'pec_aves',
    description: 'Indica presencia de aves',
  })
  aves: boolean;

  @ApiProperty({
    title: 'pec_otras_especies',
    description: 'Indica presencia de otras especies pecuarias',
  })
  otrasEspecies: boolean;

  @ApiProperty({
    title: 'pec_fuente',
    description: 'Fuente de origen del registro pecuario',
  })
  fuente: string;

  @ApiProperty({
    title: 'pec_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'pec_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'pec_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'pec_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'pec_estado',
    description: '',
  })
  estado: number;

  @ApiProperty({
    title: 'pec_eliminado',
    description: '',
  })
  eliminado: boolean;
}
