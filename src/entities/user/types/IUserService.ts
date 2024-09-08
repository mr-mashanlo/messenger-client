import { IUser } from './IUser';

export interface IUserService {
  getAll: () => Promise<Array<IUser>>,
  getOne: ( id: string ) => Promise<IUser>,
  update: ( updates: Partial<IUser>, id: string ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}