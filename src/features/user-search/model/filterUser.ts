import { UserResponseType } from '@/entities/user';

export function filterUser( users: Array<UserResponseType>, query: string ) {
  return users.filter( ( user ) => user.fullname.toLowerCase().includes( query.toLowerCase() ) );
}