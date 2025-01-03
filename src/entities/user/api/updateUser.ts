import { authInstance } from '@/shared/api';

async function updateUser( id: string ) {
  const response = await authInstance( `user/${id}`, { method: 'put' } );
  return await response.json();
};

export default updateUser;