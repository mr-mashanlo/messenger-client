import { authInstance } from '@/shared/api';

async function clearChat( id: string ) {
  const response = await authInstance( `chat/clear/${id}`, { method: 'delete' } );
  return await response.json();
};

export default clearChat;