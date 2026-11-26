import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtensionController } from './controllers/extension.controller';
import { ExtensionEntity } from './entities/extension.entity';
import { ExtensionService } from './services/extension.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExtensionEntity], 'interoperabilidad'),
    ConfigModule,
  ],
  controllers: [ExtensionController],
  providers: [ExtensionService],
})
export class ExtensionModule {}
