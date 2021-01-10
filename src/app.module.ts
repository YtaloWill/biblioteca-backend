import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { ObrasController } from './obras/obras.controller';
import { ObrasModule } from './obras/obras.module';
import { obrasProviders } from './obras/obras.providers';
import { ObrasService } from './obras/obras.service';

@Module({
  imports: [ObrasModule, DatabaseModule],
  controllers: [ObrasController],
  providers: [ObrasService, ...obrasProviders],
})
export class AppModule {}
