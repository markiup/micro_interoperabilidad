/**
 * @fileoverview Main application module
 * @author Carlos Burgos C <cburgosc@mag.gob.ec>
 * @version 1.7.1
 * @license MAG
 * @created 2025-02-24
 * @modified 2025-02-24
 * @description Backend para el manejo de la información desde la base de datos.
 *
 * @copyright Copyright (c) 2025 Ministerio de Agricultura
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * Pruebas/internas { cors: false }
   * Producción/Dominio { cors: true }
   */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());

  const NAME_PROYECT = process.env.NAME_PROYECT || '';
  const DETAIL_PROYECT = process.env.DETAIL_PROYECT || '';
  const VERSION = process.env.VERSION || '';
  const HOST_SWAGGER = process.env.HOST_SWAGGER || '';
  const DETAIL_SWAGGER = process.env.DETAIL_SWAGGER || '';
  const PORT_DEFAULT = process.env.PORT_DEFAULT || '';

  const config = new DocumentBuilder()
    .setTitle('(Microservicio) ' + NAME_PROYECT)
    .setDescription(DETAIL_PROYECT)
    .setVersion(VERSION)
    .addServer(HOST_SWAGGER, DETAIL_SWAGGER)
    .setLicense(
      'Todos los derechos reservados | Ministerio de Agricultura - 2025',
      '',
    )
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-KEY',
        in: 'header',
        description: 'Ingresa tu API_KEY entregada por el personal MAG',
      },
      'X-API-KEY',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(String(NAME_PROYECT), app, document);
  await app.listen(PORT_DEFAULT);
}
void bootstrap();
