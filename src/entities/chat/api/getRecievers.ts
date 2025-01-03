import { authInstance } from '@/shared/api';

async function getRecievers() {
  const response = await authInstance( 'chat/get/recievers' );
  return await response.json();
};

export default getRecievers;