import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Productor } from './micro/productor/entities/productor.entity';
import { ProductorModule } from './micro/productor/productor.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';
import { HeaderApiKeyStrategy } from './utils/apiKey.strategy';
import { HealthModule } from './system/health/health.module';

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
    ProductorModule,
    HealthModule,
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
