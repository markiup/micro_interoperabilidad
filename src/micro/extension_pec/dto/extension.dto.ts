import { ApiProperty } from '@nestjs/swagger';

export class ExtensionDto {
  @ApiProperty({
    title: 'ext_id',
    description: 'Identificador secuencial de la tabla',
  })
  ext_id: number;

  @ApiProperty({
    title: 'ext_servicio_recibido',
    description: 'Servicio de extensión agrícola recibido',
  })
  ext_servicio_recibido: string;

  @ApiProperty({
    title: 'ext_institucion',
    description: 'Institución que impartió el servicio de extensión',
  })
  ext_institucion: string;

  @ApiProperty({
    title: 'ext_fecha_inicio',
    description: 'Fecha de inicio del servicio de extensión',
  })
  ext_fecha_inicio: Date;

  @ApiProperty({
    title: 'ext_fuente',
    description: 'Fuente de origen del registro',
  })
  ext_fuente: string;

  @ApiProperty({
    title: 'ext_numero_cedula',
    description: 'Número de cédula del productor',
  })
  ext_numero_cedula: string;

  @ApiProperty({
    title: 'ext_asociacion_nombre',
    description: 'Nombre de la asociación o cooperativa a la que pertenece',
  })
  ext_asociacion_nombre: string;

  @ApiProperty({
    title: 'ext_reg_usu',
    description: '',
  })
  ext_reg_usu: number;

  @ApiProperty({
    title: 'ext_reg_fecha',
    description: '',
  })
  ext_reg_fecha: Date = new Date();

  @ApiProperty({
    title: 'ext_act_usu',
    description: '',
  })
  ext_act_usu: number;

  @ApiProperty({
    title: 'ext_act_fecha',
    description: '',
  })
  ext_act_fecha: Date = new Date();

  @ApiProperty({
    title: 'ext_estado',
    description: '',
  })
  ext_estado: number;

  @ApiProperty({
    title: 'ext_eliminado',
    description: '',
  })
  ext_eliminado: boolean;
}
