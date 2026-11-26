import { Controller, Get, Param, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { UbicacionService } from '../services/ubicacion.service';

@ApiTags('Micro Ubicacion')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('ubicacion')
@UseFilters(new HttpExceptionFilter())
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Get(':identificacion')
  @ApiOperation({
    summary: 'Busca los registros de ubicación por su número de identificación',
    description:
      'Retorna la información más reciente de ubicación correspondiente al número de identificación proporcionado por FUENTE, ordenada por fecha de registro descendente',
  })
  async findOneByIdentificacion(
    @Param('identificacion') identificacion: string,
  ) {
    return this.ubicacionService.findByIdentificacionQueryNative(
      identificacion,
    );
  }
}
