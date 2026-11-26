import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUENTES_INTER } from 'src/utils/const';
import { Repository } from 'typeorm';
import { ExtensionEntity } from '../entities/extension.entity';

@Injectable()
export class ExtensionService {
  tableName: string;

  constructor(
    @InjectRepository(ExtensionEntity, 'interoperabilidad')
    private readonly extensionRepository: Repository<ExtensionEntity>,
  ) {
    this.tableName = 'extensiones';
  }

  /**
   * Busca los registros de extensión y asociatividad de un productor por su número de identificación,
   * retornando el más reciente si existen varias coincidencias por FUENTE.
   * @param identificacion El número de identificación del productor a buscar
   * @returns Un arreglo con las entidades de extensión encontradas o un arreglo vacío si no existen
   */
  async findByIdentificacionQueryNative(
    identificacion: string,
  ): Promise<ExtensionEntity[] | []> {
    return this.extensionRepository
      .createQueryBuilder('e')
      .distinctOn(['e.ext_fuente'])
      .where('e.ext_numero_cedula = :identificacion', { identificacion })
      .andWhere('e.ext_fuente IN (:...fuentes)', {
        fuentes: FUENTES_INTER,
      })
      .orderBy('e.ext_fuente', 'ASC')
      .addOrderBy('e.ext_reg_fecha', 'DESC')
      .getMany();
  }
}
