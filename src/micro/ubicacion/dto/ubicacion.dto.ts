import { ApiProperty } from '@nestjs/swagger';

export class UbicacionDto {
  @ApiProperty({
    title: 'ubi_id',
    description: 'Identificador secuencial de la tabla',
  })
  id: number;

  @ApiProperty({
    title: 'per_id',
    description: 'Identificador de la persona asociada',
  })
  perId: number;

  @ApiProperty({
    title: 'ubi_bol_id',
    description:
      'Identificador de la boleta o terreno asociado al productor en la fuente',
  })
  bolId: number;

  @ApiProperty({
    title: 'ubi_provincia_registro',
    description: 'Provincia de registro del terreno o boleta',
  })
  provinciaRegistro: string;

  @ApiProperty({
    title: 'ubi_canton_registro',
    description: 'Cantón de registro del terreno o boleta',
  })
  cantonRegistro: string;

  @ApiProperty({
    title: 'ubi_parroquia_registro',
    description: 'Parroquia de registro del terreno o boleta',
  })
  parroquiaRegistro: string;

  @ApiProperty({
    title: 'ubi_provincia_residencia',
    description: 'Provincia de residencia del productor',
  })
  provinciaResidencia: string;

  @ApiProperty({
    title: 'ubi_canton_residencia',
    description: 'Cantón de residencia del productor',
  })
  cantonResidencia: string;

  @ApiProperty({
    title: 'ubi_parroquia_residencia',
    description: 'Parroquia de residencia del productor',
  })
  parroquiaResidencia: string;

  @ApiProperty({
    title: 'ubi_distancia_domicilio',
    description: 'Distancia al domicilio',
  })
  distanciaDomicilio: number;

  @ApiProperty({
    title: 'ubi_fuente',
    description: 'Fuente de origen del registro de ubicación',
  })
  fuente: string;

  @ApiProperty({
    title: 'ubi_reg_usu',
    description: '',
  })
  regUsuario: number;

  @ApiProperty({
    title: 'ubi_reg_fecha',
    description: '',
  })
  regFecha: Date = new Date();

  @ApiProperty({
    title: 'ubi_act_usu',
    description: '',
  })
  actUsuario: number;

  @ApiProperty({
    title: 'ubi_act_fecha',
    description: '',
  })
  actFecha: Date = new Date();

  @ApiProperty({
    title: 'ubi_estado',
    description: '',
  })
  estado: number;

  @ApiProperty({
    title: 'ubi_eliminado',
    description: '',
  })
  eliminado: boolean;
}
