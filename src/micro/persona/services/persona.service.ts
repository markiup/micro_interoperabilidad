import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUENTES_INTER } from 'src/utils/const';
import { Repository } from 'typeorm';
import { PersonaEntity } from '../entities/persona.entity';

@Injectable()
export class PersonaService {
  tableName: string;

  constructor(
    @InjectRepository(PersonaEntity, 'interoperabilidad')
    private readonly personaRepository: Repository<PersonaEntity>,
  ) {
    this.tableName = 'personas';
  }

  /**
   * Busca una persona por su número de identificación, la mas reciente si hay varias coincidencias por FUENTE.
   * @param identificacion La identificación de la persona a buscar
   * @returns Un arreglo con las entidades de la persona encontradas o un arreglo vacío si no existen
   */
  async findByIdentificacionQueryNative(
    identificacion: string,
  ): Promise<PersonaEntity[] | []> {
    return this.personaRepository
      .createQueryBuilder('p')
      .distinctOn(['p.per_fuente'])
      .where('p.per_numero_cedula = :identificacion', { identificacion })
      .andWhere('p.per_fuente IN (:...fuentes)', {
        fuentes: FUENTES_INTER,
      })
      .orderBy('p.per_fuente', 'ASC')
      .addOrderBy('p.per_reg_fecha', 'DESC')
      .getMany();
  }
}
