import { Controller, Get, Param, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { ExtensionService } from '../services/extension.service';

@ApiTags('Micro Extension')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('extension')
@UseFilters(new HttpExceptionFilter())
export class ExtensionController {
  constructor(private readonly extensionService: ExtensionService) {}

  @Get(':identificacion')
  @ApiOperation({
    summary:
      'Busca los registros de extensión y asociatividad por número de identificación',
    description:
      'Retorna la información mas reciente de asociatividad y extension correspondiente al número de identificación proporcionado por FUENTE, ordenada por fecha de registro descendente',
  })
  async findOneByIdentificacion(
    @Param('identificacion') identificacion: string,
  ) {
    return this.extensionService.findByIdentificacionQueryNative(
      identificacion,
    );
  }
}
