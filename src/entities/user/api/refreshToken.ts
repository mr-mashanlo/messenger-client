import { authInstance } from '@/shared/api';

async function refreshToken() {
  const response = await authInstance( 'auth/refresh' );
  return await response.json();
};

export default refreshToken;