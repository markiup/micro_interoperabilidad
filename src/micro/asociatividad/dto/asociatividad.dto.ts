import { ApiProperty } from '@nestjs/swagger';

export class AsociatividadDto {
  @ApiProperty({
    title: 'aso_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'per_id',
    description: 'Identificador de la persona asociada',
  })
  perId: number;

  @ApiProperty({
    title: 'aso_nombre',
    description: 'Nombre de la asociación o cooperativa agropecuaria',
  })
  nombre: string;

  @ApiProperty({
    title: 'aso_fuente',
    description: 'Fuente de origen del registro de asociatividad',
  })
  fuente: string;

  @ApiProperty({
    title: 'aso_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'aso_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'aso_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'aso_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'aso_eliminado',
    description: '',
  })
  eliminado: boolean;

  @ApiProperty({
    title: 'aso_estado',
    description: '',
  })
  estado: number;
}
