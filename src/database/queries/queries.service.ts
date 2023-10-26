import { Injectable } from '@nestjs/common';
import {
  EmailAlreadyExistsException,
  JobAlreadyApplied,
  NotFoundException,
} from '@app/exceptions/custom.exception';
import { errorMessages } from '@app/common/constants/errorMessages';
import { successMessages } from '@app/common/constants/successMessages';
import { PostgresPrismaService } from '@app/database/postgres-prisma.service';
import { UserUpdateDto } from '@app/modules/user/dto/updateUser.dto';
import { modelNames } from '../modelNames';

@Injectable()
export class PostgresQueriesService {
  constructor(private readonly prisma: PostgresPrismaService) {}

  async createUser(model: string, data: any) {
    return await this.prisma[model].create({
      data,
    });
  }

  async findMany(model: string, where: any, skip: number, take: number) {
    const data = await this.prisma[model].findMany({ where, skip, take });
    if (data.length === 0)
      throw new NotFoundException(errorMessages.dataNotFound);
    return data;
  }

  async findManyJobs(
    user,
    model: string,
    where: any,
    skip: number,
    take: number,
  ) {
    const jobs = await this.prisma[model].findMany({
      where,
      skip,
      take,
    });
    if (jobs.length === 0)
      throw new NotFoundException(errorMessages.dataNotFound);
    return { jobs };
  }

  async findOne(model: string, search: string) {
    const userExists = await this.prisma[model].findFirst({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        OR: [{ email: search }, { uuid: search }],
      },
    });

    if (!userExists) throw new NotFoundException(errorMessages.dataNotFound);
    return userExists;
  }

  async findJob(model: string, search: string) {
    const jobExists = await this.prisma[model].findFirst({
      where: { uuid: search },
    });

    if (!jobExists) throw new NotFoundException(errorMessages.dataNotFound);
    return jobExists;
  }

  async applyForJob(model: string, userId: number, jobId: string) {
    const job = await this.findJob(modelNames.job, jobId);
    if (job.applicants.includes(userId))
      throw new JobAlreadyApplied(errorMessages.jobAlreadyApplied);
    await this.prisma[model].update({
      where: { id: job.id },
      data: {
        applicants: {
          push: userId, // Add the user's ID to the applicants array
        },
      },
    });
    return { message: successMessages.appliedJob };
  }

  async findUserByphone(model: string, email: string, phone: string) {
    const [phoneExists, emailExists] = await Promise.all([
      this.prisma[model].findUnique({ where: { phone } }),
      this.prisma[model].findUnique({ where: { email } }),
    ]);

    if (phoneExists || emailExists) {
      throw new EmailAlreadyExistsException(
        phoneExists ? errorMessages.phoneExists : errorMessages.emailExists,
      );
    }
  }

  async updateUser(model: string, updateUserDto: UserUpdateDto, uuid: string) {
    const updatedUser = await this.prisma[model].update({
      where: { uuid },
      data: updateUserDto,
    });

    const message = !!updatedUser
      ? successMessages.userUpdatedSuccessfully
      : errorMessages.userUpdationFailed;

    return {
      message,
      data: updatedUser ? updatedUser : null,
    };
  }

  async updatePassword(
    model: string,
    salt: string,
    newHashedPassword: string,
    uuid: string,
  ) {
    try {
      const updatedUser = await this.prisma[model].update({
        where: { uuid },
        data: { salt, password: newHashedPassword },
      });

      return {
        message: updatedUser
          ? successMessages.userUpdatedSuccessfully
          : errorMessages.userUpdationFailed,
      };
    } catch (error) {
      return { message: error.message || errorMessages.userUpdationFailed };
    }
  }

  async deleteUser(model: string, uuid: string) {
    return await this.prisma[model]
      .delete({
        where: { uuid },
      })
      .then(() => {
        return { message: successMessages.userHasBeenDeleted };
      })
      .catch(() => {
        return { message: errorMessages.dataNotFound };
      });
  }

  async createVerificationToken(
    model: string,
    userId: string,
    token: string,
    type: string,
  ) {
    const data = { userId, type, value: token };

    return await this.prisma[model].create({
      data,
    });
  }

  async findToken(model: string, search: string, type: string) {
    const token = await this.prisma[model].findFirst({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        OR: [
          { userId: search, type },
          { value: search, type },
        ],
      },
    });
    return token;
  }

  async deleteOneToken(model: string, token: string, userId: string) {
    return await this.prisma[model]
      .delete({
        where: { value: token, userId },
      })
      .then(() => {
        return { message: successMessages.tokenDeletedSuccessfully };
      })
      .catch(() => {
        return { message: errorMessages.tokenDeletionFailed };
      });
  }

  async deleteManyTokens(model: string, expiryDate: Date) {
    return await this.prisma[model]
      .deleteMany({
        where: { createdAt: { lt: expiryDate } },
      })
      .then(() => {
        return { message: successMessages.tokenDeletedSuccessfully };
      })
      .catch(() => {
        return { message: errorMessages.tokenDeletionFailed };
      });
  }
}
