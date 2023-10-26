import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JobController } from '@app/modules/jobs/controllers/job.controller';
import { JobService } from '@app/modules/jobs/services/job.service';
import { jwtFactory } from '@app/modules/auth/config/jwt.config';
import { JwtStrategy } from '@app/modules/auth/strategies/jwt.strategy';
import { PostgresQueriesService } from '@app/database/queries/queries.service';
import { PostgresPrismaService } from '@app/database/postgres-prisma.service';

@Module({
  imports: [JwtModule.registerAsync(jwtFactory)],
  controllers: [JobController],
  providers: [
    JobService,
    PostgresPrismaService,
    JwtStrategy,
    PostgresQueriesService,
  ],
})
export class JobModule {}
