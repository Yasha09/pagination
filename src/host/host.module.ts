import { Module } from '@nestjs/common';
import { HostService } from './host.service';
import { HostResolver } from './host.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Host } from './host.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Host])],
  providers: [HostService, HostResolver],
})
export class HostModule {}
