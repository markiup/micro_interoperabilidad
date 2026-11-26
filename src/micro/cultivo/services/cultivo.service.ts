import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUENTES_INTER } from 'src/utils/const';
import { Repository } from 'typeorm';
import { CultivoEntity } from '../entities/cultivo.entity';

@Injectable()
export class CultivoService {
  tableName: string;

  constructor(
    @InjectRepository(CultivoEntity, 'interoperabilidad')
    private readonly cultivoRepository: Repository<CultivoEntity>,
  ) {
    this.tableName = 'cultivos';
  }

  /**
   * Busca los registros de cultivo de un productor por su número de identificación,
   * retornando el más reciente si existen varias coincidencias por FUENTE.
   * @param identificacion El número de identificación del productor a buscar
   * @returns Un arreglo con las entidades de cultivo encontradas o un arreglo vacío si no existen
   */
  async findByIdentificacionQueryNative(
    identificacion: string,
  ): Promise<CultivoEntity[] | []> {
    return this.cultivoRepository
      .createQueryBuilder('c')
      .distinctOn(['c.cul_fuente'])
      .where('c.cul_numero_cedula = :identificacion', { identificacion })
      .andWhere('c.cul_fuente IN (:...fuentes)', {
        fuentes: FUENTES_INTER,
      })
      .orderBy('c.cul_fuente', 'ASC')
      .addOrderBy('c.cul_reg_fecha', 'DESC')
      .getMany();
  }
}
