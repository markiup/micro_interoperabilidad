import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    /* TypeOrmModule.forRoot({
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
    }),*/
    TypeOrmModule.forRootAsync({
      name: 'renagroConnection',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: Number(config.get<number>('DB_PORT')),
        username: config.get<string>('DB_USERNAME'),
        password: String(config.get<string>('DB_PASSWORD')),
        database: config.get<string>('DB_NAME'),
        schema: config.get<string>('DB_SCHEMA_INTEROPERABILIDAD'),
        entities: [],
        synchronize: false,
        ssl: {
          rejectUnauthorized: false,
        },
        extra: {
          max: Number(config.get<number>('DB_POOL_MAX')) || 2,
        },
        retryDelay: Number(config.get<number>('RETRYDELAY_DATABASE')),
        retryAttempts: Number(config.get<number>('RETRYATTEMPTS_DATABASE')),
      }),
    }),
    //ProductorModule,
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
