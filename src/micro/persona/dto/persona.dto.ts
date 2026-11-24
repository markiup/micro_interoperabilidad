import { ApiProperty } from '@nestjs/swagger';

export class PersonaDto {
  @ApiProperty({
    title: 'per_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'per_numero_cedula',
    description:
      'Número de cédula o identificación del productor recuperado de las fuentes',
  })
  numeroCedula: string;

  @ApiProperty({
    title: 'per_tipo_persona',
    description: 'Tipo de persona',
  })
  tipoPersona: string;

  @ApiProperty({
    title: 'per_fecha_actualizacion',
    description: 'Fecha de actualización de datos en la fuente',
  })
  fechaActualizacion: Date;

  @ApiProperty({
    title: 'per_telefono_fijo',
    description: 'Teléfono fijo del productor',
  })
  telefonoFijo: string;

  @ApiProperty({
    title: 'per_telefono_celular',
    description: 'Teléfono celular del productor',
  })
  telefonoCelular: string;

  @ApiProperty({
    title: 'per_telefono_celular_info',
    description: 'Información adicional del teléfono celular',
  })
  telefonoCelularInfo: string;

  @ApiProperty({
    title: 'per_correo_electronico',
    description: 'Correo electrónico del productor',
  })
  correoElectronico: string;

  @ApiProperty({
    title: 'per_fuente',
    description: 'Fuente de origen del registro de la persona',
  })
  fuente: string;

  @ApiProperty({
    title: 'per_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'per_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'per_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'per_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'per_estado',
    description: '',
  })
  estado: number;

  @ApiProperty({
    title: 'per_eliminado',
    description: '',
  })
  eliminado: boolean;
}
