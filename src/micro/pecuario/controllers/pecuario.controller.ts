import { Controller, Get, Param, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { PecuarioService } from '../services/pecuario.service';

@ApiTags('Micro Pecuario')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('pecuario')
@UseFilters(new HttpExceptionFilter())
export class PecuarioController {
  constructor(private readonly pecuarioService: PecuarioService) {}

  @Get(':identificacion')
  @ApiOperation({
    summary: 'Busca los registros pecuarios por su número de identificación',
    description:
      'Retorna la información más reciente de actividad pecuaria correspondiente al número de identificación proporcionado por FUENTE, ordenada por fecha de registro descendente',
  })
  async findOneByIdentificacion(
    @Param('identificacion') identificacion: string,
  ) {
    return this.pecuarioService.findByIdentificacionQueryNative(identificacion);
  }
}
