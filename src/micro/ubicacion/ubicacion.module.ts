import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionController } from './controllers/ubicacion.controller';
import { UbicacionEntity } from './entities/ubicacion.entity';
import { UbicacionService } from './services/ubicacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UbicacionEntity], 'interoperabilidad'),
    ConfigModule,
  ],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
