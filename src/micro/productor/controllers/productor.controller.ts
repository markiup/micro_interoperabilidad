import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseFilters,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { ProductorDto } from '../dto/productor.dto';
import { ProductorService } from '../services/productor.service';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { Productor } from '../entities/productor.entity';
import { ProductorUpdateDto } from '../dto/productorUpdate';

@ApiTags('Micro Productor')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('micro-template/v1/productor') //Solo se puede utilizar guion medio para separar palabras
@UseFilters(new HttpExceptionFilter())
export class ProductorController {
  /************CRUD PARA MICROSERVICIOS************/

  constructor(private microProductorService: ProductorService) {}

  //BUSCAR TODOS LOS ITEMS
  @Get('/findAll')
  @ApiOperation({
    summary: 'Obtener todos los registros',
    description:
      'Si existen varios registros se recomienda utilizar el servicio de paginación',
  })
  findAll() {
    return this.microProductorService.findAll();
  }

  //CONSULTA NATIVA A LA BASE
  @Get('/query/:name')
  @ApiOperation({
    summary: 'Consulta genérica a la base de datos',
    description: 'Utilizar este método cuando se tienen consultas complejas',
  })
  query(@Param('name') name: string) {
    const where = 'name like ' + "'" + name + "'";
    return this.microProductorService.queryNative(where);
  }

  //BUSCA UN ITEM ESPECIFICO POR ID
  @Get(':id')
  @ApiOperation({
    summary: 'Obtener registro',
    description: 'Envía un ID para obtener un registro específico',
  })
  findOne(@Param('id') id: number) {
    return this.microProductorService.findOne(id);
  }

  //INSERTAR DATOS
  @Post('/create')
  @ApiOperation({
    summary: 'Insertar registro',
    description: 'Envía el JSON específico para crear un nuevo registro',
  })
  create(@Body() body: ProductorDto) {
    return this.microProductorService.create(body);
  }

  //ACTUALIZAR DATOS
  @Put('/update/:id')
  @ApiOperation({
    summary: 'Actualizar registro',
    description: 'Envía el JSON específico y el ID para actualizar el registro',
  })
  update(@Param('id') id: number, @Body() body: ProductorUpdateDto) {
    return this.microProductorService.update(id, body);
  }

  //BORRA DATOS POR ID
  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar registro',
    description: `Envíar el ID del registro, es un eliminado lógico.
    'ADVERTENCIA: SOLO PARA CASOS ESPECÍFICOS, EN SU LUGAR SE RECOMIENDA USAR EL CAMPO pro_eliminado PARA MARCARLO
    'COMO ELIMINADO LÓGICAMENTE MEDIANTE SOLICITUD AL DBA DEBIDAMENTE JUSTIFICADA`,
  })
  delete(@Param('id') id: number) {
    return this.microProductorService.remove(id);
  }

  //PAGINADO
  @Get('/paginate/findAll')
  @ApiOperation({
    summary: 'Obtener datos paginados',
    description:
      'Se obtienen 10 registros por default y los links para paginar',
  })
  public paginate(
    @Paginate() query: PaginateQuery,
    @Query('counter') counter?: keyof Productor,
  ): Promise<Paginated<Productor>> {
    return this.microProductorService.paginate(query, counter);
  }
}
