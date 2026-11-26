import { ApiProperty } from '@nestjs/swagger';

export class PersonaDto {
  @ApiProperty({
    title: 'per_id',
    description: 'Identificador secuencial de la tabla',
  })
  per_id: number;

  @ApiProperty({
    title: 'per_numero_cedula',
    description:
      'Número de cédula o identificación del productor recuperado de las fuentes',
  })
  per_numero_cedula: string;

  @ApiProperty({
    title: 'per_tipo_persona',
    description: 'Tipo de persona',
  })
  per_tipo_persona: string;

  @ApiProperty({
    title: 'per_fecha_actualizacion',
    description: 'Fecha de actualización de datos en la fuente',
  })
  per_fecha_actualizacion: Date;

  @ApiProperty({
    title: 'per_telefono_fijo',
    description: 'Teléfono fijo del productor',
  })
  per_telefono_fijo: string;

  @ApiProperty({
    title: 'per_telefono_celular',
    description: 'Teléfono celular del productor',
  })
  per_telefono_celular: string;

  @ApiProperty({
    title: 'per_telefono_celular_info',
    description: 'Información adicional del teléfono celular',
  })
  per_telefono_celular_info: string;

  @ApiProperty({
    title: 'per_correo_electronico',
    description: 'Correo electrónico del productor',
  })
  per_correo_electronico: string;

  @ApiProperty({
    title: 'per_fuente',
    description: 'Fuente de origen del registro de la persona',
  })
  per_fuente: string;

  @ApiProperty({
    title: 'per_reg_usu',
    description: '',
  })
  per_reg_usu: number;

  @ApiProperty({
    title: 'per_reg_fecha',
    description: '',
  })
  per_reg_fecha: Date = new Date();

  @ApiProperty({
    title: 'per_act_usu',
    description: '',
  })
  per_act_usu: number;

  @ApiProperty({
    title: 'per_act_fecha',
    description: '',
  })
  per_act_fecha: Date = new Date();

  @ApiProperty({
    title: 'per_estado',
    description: '',
  })
  per_estado: number;

  @ApiProperty({
    title: 'per_eliminado',
    description: '',
  })
  per_eliminado: boolean;
}
