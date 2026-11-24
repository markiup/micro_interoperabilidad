import { ApiProperty } from '@nestjs/swagger';

export class ExtensionDto {
  @ApiProperty({
    title: 'ext_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'per_id',
    description: 'Identificador de la persona asociada',
  })
  perId: number;

  @ApiProperty({
    title: 'ext_servicio_recibido',
    description: 'Servicio de extensión agrícola recibido',
  })
  servicioRecibido: string;

  @ApiProperty({
    title: 'ext_institucion',
    description: 'Institución que impartió el servicio de extensión',
  })
  institucion: string;

  @ApiProperty({
    title: 'ext_fecha_inicio',
    description: 'Fecha de inicio del servicio de extensión',
  })
  fechaInicio: Date;

  @ApiProperty({
    title: 'ext_fuente',
    description: 'Fuente de origen del registro',
  })
  fuente: string;

  @ApiProperty({
    title: 'ext_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'ext_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'ext_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'ext_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'ext_estado',
    description: '',
  })
  estado: number;

  @ApiProperty({
    title: 'ext_eliminado',
    description: '',
  })
  eliminado: boolean;
}
