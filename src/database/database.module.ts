import { Module } from '@nestjs/common';
import { PostgresPrismaService } from './postgres-prisma.service';

@Module({
  providers: [PostgresPrismaService],
})
export class DatabaseModule {}
