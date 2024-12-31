import { authInstance } from '@/shared/api';

async function getChats() {
  const response = await authInstance( 'chat/get' );
  return await response.json();
};

export default getChats;