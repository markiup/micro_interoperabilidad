import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProductorUpdateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_tipo_doc: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_documento: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_nombres: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  pro_fecha_nacimiento: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  pro_edad: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_direccion: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  pro_terminos: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_acuerdo_alfc_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  prod_foto_alfc_id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_presentacion: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  pais_id: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ubi_id_prov: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ubi_id_can: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ubi_id_par: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  pro_habilitado: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  pro_estado: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  pro_eliminado: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pro_act_usu: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  pro_act_fecha: Date;
}
