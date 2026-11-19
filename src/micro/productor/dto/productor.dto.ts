import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProductorDto {
  pro_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pro_tipo_doc: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pro_documento: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pro_nombres: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  pro_fecha_nacimiento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pro_edad: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pro_direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  pro_terminos: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  pro_acuerdo_alfc_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  prod_foto_alfc_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pro_presentacion: string;

  @ApiProperty()
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsBoolean()
  pro_habilitado: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pro_estado: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  pro_eliminado: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pro_reg_usu: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  pro_reg_fecha: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  pro_act_usu: number;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  pro_act_fecha: Date;
}
