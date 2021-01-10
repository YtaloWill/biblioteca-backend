import { Module } from '@nestjs/common';
import { ObrasService } from './obras.service';
import { ObrasController } from './obras.controller';
import { obrasProviders } from './obras.providers';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ObrasController],
  providers: [ObrasService, ...obrasProviders]
})
export class ObrasModule {}
