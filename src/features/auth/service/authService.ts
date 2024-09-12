import { IAuthService } from '@/entities/auth';
import { authInstance, defaultInstance } from '@/shared/api';

class AuthService implements IAuthService {

  signin = async ( email: string, password: string ) => {
    try {
      const response = await defaultInstance( 'auth/signin', { method: 'post', body: JSON.stringify( { email, password } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { id: string, RToken: string, AToken: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  signup = async ( email: string, password: string, confirm: string ) => {
    try {
      const response = await defaultInstance( 'auth/signup', { method: 'post', body: JSON.stringify( { email, password, confirm } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { id: string, RToken: string, AToken: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  logout = async () => {
    try {
      const response = await authInstance( 'auth/logout', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json();
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async () => {
    try {
      const response = await authInstance( 'auth/logout', { method: 'delete', headers: { 'content-type': 'application/json' } } );
      return await response.json();
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  token = async () => {
    try {
      const response = await authInstance( 'auth/refresh', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json();
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}

const authService = new AuthService();

export default authService;