import { authInstance } from '@/shared/api';

async function deleteChat( id: string ) {
  const response = await authInstance( `chat/delete/${id}`, { method: 'delete' } );
  return await response.json();
};

export default deleteChat;