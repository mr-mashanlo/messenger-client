import { authInstance } from '@/shared/api';

async function signoutUser() {
  const response = await authInstance( 'auth/signout' );
  return await response.json();
};

export default signoutUser;