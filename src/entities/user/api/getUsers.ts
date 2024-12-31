import { authInstance } from '@/shared/api';

async function getUsers( query: object ) {
  const response = await authInstance( 'user/get', { method: 'post', body: JSON.stringify( query ) } );
  return await response.json();
};

export default getUsers;