import { Gender } from '@app/modules/user/constants/user';

export interface UserInterface {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthDate: Date | null;
  address: string | null;
  gender: Gender | null;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
