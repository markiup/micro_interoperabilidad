import { Controller, Get, Param, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/utils/http-exception.filter';
import { PersonaService } from '../services/persona.service';

@ApiTags('Micro Persona')
@ApiSecurity('X-API-KEY', ['X-API-KEY'])
@UseGuards(AuthGuard('api-key'))
@Controller('persona')
@UseFilters(new HttpExceptionFilter())
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Get(':identificacion')
  @ApiOperation({
    summary: 'Busca una persona por su número de identificación',
    description:
      'Retorna la información mas reciente de la persona correspondiente al número de identificación proporcionado por FUENTE, ordenada por fecha de registro descendente',
  })
  async findOneByIdentificacion(
    @Param('identificacion') identificacion: string,
  ) {
    return this.personaService.findByIdentificacionQueryNative(identificacion);
  }
}
