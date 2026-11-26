import { ApiProperty } from '@nestjs/swagger';

export class UbicacionDto {
  @ApiProperty({
    title: 'ubi_id',
    description: 'Identificador secuencial de la tabla',
  })
  ubi_id: number;

  @ApiProperty({
    title: 'ubi_bol_id',
    description:
      'Identificador de la boleta o terreno asociado al productor en la fuente',
  })
  ubi_bol_id: number;

  @ApiProperty({
    title: 'ubi_provincia_registro',
    description: 'Provincia de registro del terreno o boleta',
  })
  ubi_provincia_registro: string;

  @ApiProperty({
    title: 'ubi_canton_registro',
    description: 'Cantón de registro del terreno o boleta',
  })
  ubi_canton_registro: string;

  @ApiProperty({
    title: 'ubi_parroquia_registro',
    description: 'Parroquia de registro del terreno o boleta',
  })
  ubi_parroquia_registro: string;

  @ApiProperty({
    title: 'ubi_provincia_residencia',
    description: 'Provincia de residencia del productor',
  })
  ubi_provincia_residencia: string;

  @ApiProperty({
    title: 'ubi_canton_residencia',
    description: 'Cantón de residencia del productor',
  })
  ubi_canton_residencia: string;

  @ApiProperty({
    title: 'ubi_parroquia_residencia',
    description: 'Parroquia de residencia del productor',
  })
  ubi_parroquia_residencia: string;

  @ApiProperty({
    title: 'ubi_distancia_domicilio',
    description: 'Distancia al domicilio',
  })
  ubi_distancia_domicilio: number;

  @ApiProperty({
    title: 'ubi_fuente',
    description: 'Fuente de origen del registro de ubicación',
  })
  ubi_fuente: string;

  @ApiProperty({
    title: 'ubi_numero_cedula',
    description: 'Número de cédula del productor',
  })
  ubi_numero_cedula: string;

  @ApiProperty({
    title: 'ubi_reg_usu',
    description: '',
  })
  ubi_reg_usu: number;

  @ApiProperty({
    title: 'ubi_reg_fecha',
    description: '',
  })
  ubi_reg_fecha: Date = new Date();

  @ApiProperty({
    title: 'ubi_act_usu',
    description: '',
  })
  ubi_act_usu: number;

  @ApiProperty({
    title: 'ubi_act_fecha',
    description: '',
  })
  ubi_act_fecha: Date = new Date();

  @ApiProperty({
    title: 'ubi_estado',
    description: '',
  })
  ubi_estado: number;

  @ApiProperty({
    title: 'ubi_eliminado',
    description: '',
  })
  ubi_eliminado: boolean;
}
