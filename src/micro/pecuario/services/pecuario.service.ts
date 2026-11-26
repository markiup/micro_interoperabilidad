import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUENTES_INTER } from 'src/utils/const';
import { Repository } from 'typeorm';
import { PecuarioEntity } from '../entities/pecuario.entity';

@Injectable()
export class PecuarioService {
  tableName: string;

  constructor(
    @InjectRepository(PecuarioEntity, 'interoperabilidad')
    private readonly pecuarioRepository: Repository<PecuarioEntity>,
  ) {
    this.tableName = 'pecuarias';
  }

  /**
   * Busca los registros pecuarios de un productor por su número de identificación,
   * retornando el más reciente si existen varias coincidencias por FUENTE.
   * @param identificacion El número de identificación del productor a buscar
   * @returns Un arreglo con las entidades pecuarias encontradas o un arreglo vacío si no existen
   */
  async findByIdentificacionQueryNative(
    identificacion: string,
  ): Promise<PecuarioEntity[] | []> {
    return this.pecuarioRepository
      .createQueryBuilder('p')
      .distinctOn(['p.pec_fuente'])
      .where('p.pec_numero_cedula = :identificacion', { identificacion })
      .andWhere('p.pec_fuente IN (:...fuentes)', {
        fuentes: FUENTES_INTER,
      })
      .orderBy('p.pec_fuente', 'ASC')
      .addOrderBy('p.pec_reg_fecha', 'DESC')
      .getMany();
  }
}
