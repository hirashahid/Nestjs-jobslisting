import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from '@app/app.controller';
import { UserModule } from '@app/modules/user/user.module';
import { AuthModule } from '@app/modules/auth/auth.module';
import { AppService } from '@app/app.service';
import { CustomExceptionFilter } from '@app/filters/global-exception.filter';
import { DatabaseModule } from '@app/database/database.module';

@Module({
  imports: [ScheduleModule.forRoot(), UserModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, JwtService, CustomExceptionFilter],
})
export class AppModule {}
