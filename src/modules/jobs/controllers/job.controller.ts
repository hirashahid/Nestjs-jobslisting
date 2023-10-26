import { Controller, Get, Param, Query, UseGuards, Post } from '@nestjs/common';

import { JwtAuthGuard } from '@app/modules/auth/guards/auth.guard';
import { JobService } from '@app/modules/jobs/services/job.service';
import { GetJobsQueryDto } from '@app/modules/jobs/dto/getAllJobsDto';
import { User } from '@app/decorators/user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('')
  async getJobs(@Query() query: GetJobsQueryDto, @User() user: any) {
    return await this.jobService.getJobs(user, query);
  }

  @Get(':id')
  async getJobById(@Param('id') id: string) {
    return await this.jobService.findJobById(id);
  }

  @Post('apply/:jobId')
  async applyForJob(@Param('jobId') jobUuid: string, @User() user: any) {
    console.log(jobUuid);
    return this.jobService.applyForJob(user.id, jobUuid);
  }
}
