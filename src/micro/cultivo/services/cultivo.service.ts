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
   * Busca una persona por su número de identificación, la mas reciente si hay varias coincidencias por FUENTE.
   * @param identificacion La identificación de la persona a buscar
   * @returns Un arreglo con las entidades de la persona encontradas o un arreglo vacío si no existen
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
