import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivoController } from './controllers/cultivo.controller';
import { CultivoEntity } from './entities/cultivo.entity';
import { CultivoService } from './services/cultivo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CultivoEntity], 'interoperabilidad'),
    ConfigModule,
  ],
  controllers: [CultivoController],
  providers: [CultivoService],
})
export class CultivoModule {}
