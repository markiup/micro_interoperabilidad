import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductorService } from './services/productor.service';
import { ProductorController } from './controllers/productor.controller';
import { Productor } from './entities/productor.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Productor]), ConfigModule],
  providers: [ProductorService],
  controllers: [ProductorController],
})
export class ProductorModule {}
