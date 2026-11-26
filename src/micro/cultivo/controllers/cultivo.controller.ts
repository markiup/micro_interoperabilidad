import { Controller, Get, Param, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { CultivoService } from '../services/cultivo.service';

@ApiTags('Micro Cultivo')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('cultivo')
@UseFilters(new HttpExceptionFilter())
export class CultivoController {
  constructor(private readonly cultivoService: CultivoService) {}

  @Get(':identificacion')
  @ApiOperation({
    summary: 'Busca el cultivo por su número de identificación',
    description:
      'Retorna la información mas reciente del cultivo correspondiente al número de identificación proporcionado por FUENTE, ordenada por fecha de registro descendente',
  })
  async findOneByIdentificacion(
    @Param('identificacion') identificacion: string,
  ) {
    return this.cultivoService.findByIdentificacionQueryNative(identificacion);
  }
}
