import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './controllers/persona.controller';
import { PersonaEntity } from './entities/persona.entity';
import { PersonaService } from './services/persona.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonaEntity], 'interoperabilidad'),
    ConfigModule,
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
