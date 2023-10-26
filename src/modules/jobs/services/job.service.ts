import { Injectable } from '@nestjs/common';

import { PostgresQueriesService } from '@app/database/queries/queries.service';
import { modelNames } from '@app/database/modelNames';
import { GetJobsQueryDto } from '@app/modules/jobs/dto/getAllJobsDto';
import { plainToClass } from 'class-transformer';
import { JobsSerialization } from '../serialization/job.serialization';
import { JobSerialization } from '../serialization/jobs.serialization';
import { successMessages } from '@app/common/constants/successMessages';

@Injectable()
export class JobService {
  constructor(private readonly prismaQueries: PostgresQueriesService) {}

  async findJobById(uuid: string) {
    const job = await this.prismaQueries.findJob(modelNames.job, uuid);
    return await this.serializeJob(job);
  }

  async getJobs(user: any, query: GetJobsQueryDto) {
    query.paginate = query.paginate ? query.paginate : 15;
    query.page = query.page ? query.page : 1;
    const skip = (query.page - 1) * query.paginate;
    const search = query?.search;

    const where = search
      ? {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          OR: [
            { title: { contains: search } },
            { company: { contains: search } },
            { location: { contains: search } },
          ],
        }
      : {};

    const { jobs } = await this.prismaQueries.findManyJobs(
      user,
      modelNames.job,
      where,
      skip,
      query.paginate,
    );
    for (const job of jobs) {
      const applied = job.applicants.includes(user.id);
      if (applied) job.applied = true;
      else job.applied = false;
    }
    const serializedJobs = await this.serializeJobs(jobs);

    return {
      data: { allJobs: serializedJobs },
      meta: {
        total: jobs?.length,
        currentPage: query.page,
        eachPage: query.paginate,
        lastPage: Math.ceil(jobs?.length / query.paginate),
      },
    };
  }

  async applyForJob(userId: number, jobId: string) {
    await this.prismaQueries.applyForJob(modelNames.job, userId, jobId);
    return { message: successMessages.appliedJob };
  }

  async serializeJobs(user: any) {
    return plainToClass(JobsSerialization, user, {
      excludeExtraneousValues: true,
    });
  }

  async serializeJob(user: any) {
    return plainToClass(JobSerialization, user, {
      excludeExtraneousValues: true,
    });
  }
}
