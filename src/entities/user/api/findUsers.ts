import { authInstance } from '@/shared/api';

async function findUsers( query: string ) {
  const response = await authInstance( `user/find/${query}` );
  return await response.json();
};

export default findUsers;