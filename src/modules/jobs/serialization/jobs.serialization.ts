import { Expose } from 'class-transformer';

export class JobSerialization {
  @Expose({ name: 'uuid' })
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  company: string;

  @Expose()
  location: string;

  @Expose()
  requirements: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
