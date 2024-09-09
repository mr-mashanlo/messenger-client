import { IUser, IUserService } from '@/entities/user/types';
import { authInstance } from '@/shared/api';

class UserService implements IUserService {

  getAll = async () => {
    try {
      const response = await authInstance( 'user/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IUser>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IUser;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<IUser>, id: string ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'put', body: JSON.stringify( { updates } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}

const userService = new UserService();

export default userService;