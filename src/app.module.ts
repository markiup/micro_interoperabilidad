import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CultivoEntity } from './micro/cultivo/entities/cultivo.entity';
import { ExtensionEntity } from './micro/extension_pec/entities/extension.entity';
import { PecuariaEntity } from './micro/pecuario/entities/pecuario.entity';
import { PersonaEntity } from './micro/persona/entities/persona.entity';
import { PersonaModule } from './micro/persona/persona.module';
import { Productor } from './micro/productor/entities/productor.entity';
import { ProductorModule } from './micro/productor/productor.module';
import { CultivoModule } from './micro/cultivo/cultivo.module';
import { UbicacionEntity } from './micro/ubicacion/entities/ubicacion.entity';
import { HealthModule } from './system/health/health.module';
import { HeaderApiKeyStrategy } from './utils/apiKey.strategy';
import { HttpExceptionFilter } from './utils/http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.des.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_DATABASE,
      port: Number(process.env.PORT_DATABASE),
      username: process.env.USER_DATABASE,
      password: process.env.PASS_DATABASE,
      database: process.env.NAME_DATABASE,
      schema: process.env.SCHEMA_DATABASE,
      entities: [Productor],
      synchronize: false,
      retryDelay: Number(process.env.RETRYDELAY_DATABASE),
      retryAttempts: Number(process.env.RETRYATTEMPTS_DATABASE),
    }),
    // Conexion para interoperabilidad
    TypeOrmModule.forRoot({
      name: 'interoperabilidad',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA_INTEROPERABILIDAD,
      entities: [
        CultivoEntity,
        ExtensionEntity,
        PecuariaEntity,
        PersonaEntity,
        UbicacionEntity,
      ],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      retryDelay: Number(process.env.RETRYDELAY_DATABASE),
      retryAttempts: Number(process.env.RETRYATTEMPTS_DATABASE),
    }),
    ProductorModule,
    CultivoModule,
    HealthModule,
    PersonaModule,
  ],
  controllers: [],
  providers: [
    HeaderApiKeyStrategy,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
