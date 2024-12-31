import { authInstance } from '@/shared/api';

async function deleteUser() {
  const response = await authInstance( 'auth/delete', { method: 'delete' } );
  return await response.json();
};

export default deleteUser;