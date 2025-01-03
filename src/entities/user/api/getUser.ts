import { authInstance } from '@/shared/api';

async function getUser( id: string ) {
  const response = await authInstance( `user/${id}` );
  return await response.json();
};

export default getUser;