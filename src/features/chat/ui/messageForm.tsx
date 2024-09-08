import { FC, FormEvent, useState } from 'react';
import { getWebsocket } from '@/shared/api';
import { useChatStore } from '../store';
import { useAuthStore } from '@/features/auth/store';
import { Input } from '@/shared/ui';

const MessageForm: FC = () => {
  const socket = getWebsocket();
  const senderId = useAuthStore( state => state.id );
  const addToMessages = useChatStore( state => state.addToMessages );
  const receiverId = useChatStore( state => state.receiverId );
  const [ message, setMessage ] = useState<string>( '' );

  const handleSubmitForm = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    addToMessages( { content: message, timestamp: Date.now(), senderId, receiverId } );
    socket.send( JSON.stringify( { type: 'message', senderId, receiverId, data: message } ) );
    setMessage( '' );
  };

  return (
    <form onSubmit={e => handleSubmitForm( e )}>
      <Input onChange={e => setMessage( e.target.value )} value={message} type="text" id="message" placeholder="Message" />
    </form>
  );
};

export default MessageForm;