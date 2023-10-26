import { Expose } from 'class-transformer';

export class JobsSerialization {
  @Expose({ name: 'uuid' })
  id: string;

  @Expose()
  title: string;

  @Expose()
  company: string;

  @Expose()
  location: string;

  @Expose()
  applied: string;
}
