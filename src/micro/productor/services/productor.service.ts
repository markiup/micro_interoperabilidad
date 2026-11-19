import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductorDto } from '../dto/productor.dto';
import { Productor } from '../entities/productor.entity';
import { PaginateQuery, paginate } from 'nestjs-paginate';
import { ProductorUpdateDto } from '../dto/productorUpdate';
import {
  countByFieldUsingPaginateFilters,
  Paginated,
} from 'src/utils/nestjs-paginate.own';

@Injectable()
export class ProductorService {
  tableName: string;

  constructor(
    @InjectRepository(Productor)
    private repository: Repository<Productor>,
  ) {
    this.tableName = 'productor';
  }

  // OBTENER TODOS LOS REGISTROS
  findAll(): Promise<Productor[]> {
    return this.repository.find();
  }

  // OBTENER UN REGISTRO POR ID
  findOne(id: number) {
    return this.repository.findOne({ where: { pro_id: id } });
  }

  //CREAR UN NUEVO REGISTRO
  create(body: ProductorDto) {
    const productor = this.repository.create(body);
    return this.repository.save(productor);
  }

  // ACTUALIZAR UN REGISTRO EN BASE AL ID
  async update(id: number, body: ProductorUpdateDto): Promise<Productor> {
    const productor = await this.repository.findOne({ where: { pro_id: id } });
    if (!productor) {
      throw new Error('Productor no encontrado');
    }
    this.repository.merge(productor, body);
    return this.repository.save(productor);
  }

  // ELIMINAR UN REGISTRO FÍSICO DE LA BASE
  // ADVERTENCIA: SOLO PARA CASOS ESPECÍFICOS, EN SU LUGAR SE RECOMIENDA USAR EL CAMPO pro_eliminado PARA MARCARLO
  // COMO ELIMINADO LÓGICAMENTE MEDIANTE SOLICITUD AL DBA DEBIDAMENTE JUSTIFICADA
  async remove(id: number) {
    await this.repository.delete(id);
    return true;
  }

  // OBTENER REGISTROS CON QUERY NATIVO
  async queryNative(where: string) {
    return await this.repository
      .createQueryBuilder(this.tableName)
      .where(where)
      .getMany();
  }

  async paginate(query: PaginateQuery, counter?: keyof Productor) {
    const response: Paginated<Productor> = await paginate(
      query,
      this.repository,
      {
        sortableColumns: ['pro_id', 'pro_nombres'],
        nullSort: 'last',
        maxLimit: 10,
        filterableColumns: {
          pro_tipo_doc: true,
          pro_documento: true,
          pro_nombres: true,
          pro_habilitado: true,
          ubi_id_prov: true,
        },
        searchableColumns: ['pro_nombres'],
        defaultSortBy: [['pro_id', 'DESC']],
      },
    );
    if (counter)
      response.counter = await countByFieldUsingPaginateFilters(
        this.repository,
        query,
        counter,
      );
    return response;
  }
}
