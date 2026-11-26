import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUENTES_INTER } from 'src/utils/const';
import { Repository } from 'typeorm';
import { UbicacionEntity } from '../entities/ubicacion.entity';

@Injectable()
export class UbicacionService {
  tableName: string;

  constructor(
    @InjectRepository(UbicacionEntity, 'interoperabilidad')
    private readonly ubicacionRepository: Repository<UbicacionEntity>,
  ) {
    this.tableName = 'ubicaciones';
  }

  /**
   * Busca los registros de ubicación de un productor por su número de identificación,
   * retornando el más reciente si existen varias coincidencias por FUENTE.
   * @param identificacion El número de identificación del productor a buscar
   * @returns Un arreglo con las entidades de ubicación encontradas o un arreglo vacío si no existen
   */
  async findByIdentificacionQueryNative(
    identificacion: string,
  ): Promise<UbicacionEntity[] | []> {
    return this.ubicacionRepository
      .createQueryBuilder('u')
      .distinctOn(['u.ubi_fuente'])
      .where('u.ubi_numero_cedula = :identificacion', { identificacion })
      .andWhere('u.ubi_fuente IN (:...fuentes)', {
        fuentes: FUENTES_INTER,
      })
      .orderBy('u.ubi_fuente', 'ASC')
      .addOrderBy('u.ubi_reg_fecha', 'DESC')
      .getMany();
  }
}
