import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PecuarioController } from './controllers/pecuario.controller';
import { PecuarioEntity } from './entities/pecuario.entity';
import { PecuarioService } from './services/pecuario.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PecuarioEntity], 'interoperabilidad'),
    ConfigModule,
  ],
  controllers: [PecuarioController],
  providers: [PecuarioService],
})
export class PecuarioModule {}
