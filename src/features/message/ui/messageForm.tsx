import { FC, FormEvent, useContext, useState } from 'react';

import { useAuthStore } from '@/features/auth/store';
import { useMessageStore } from '@/features/message/store';
import { SocketContext } from '@/shared/context';

const MessageForm: FC = () => {
  const socket = useContext( SocketContext );
  const senderId = useAuthStore( state => state.id );
  const recieverId = useMessageStore( state => state.receiver?._id );
  const recentMessages = useMessageStore( state => state.recentMessages );
  const setRecentMessages = useMessageStore( state => state.setRecentMessages );
  const [ message, setMessage ] = useState<string>( '' );

  function handleSubmitForm( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    socket?.emit( 'message', { senderId, recieverId, content: { text: message, media: '' }, timestamp: Date.now() } );
    setRecentMessages( [ ...recentMessages, { senderId, content: { text: message, media: '' }, timestamp: Date.now() } ] );
    setMessage( '' );
  }

  return (
    <form onSubmit={e => handleSubmitForm( e )}>
      <input onChange={e => setMessage( e.target.value )} value={message} type="text" className="w-full p-3 bg-gray-100 rounded-lg" />
    </form>
  );
};

export default MessageForm;