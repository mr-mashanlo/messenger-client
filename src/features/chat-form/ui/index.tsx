import { FC, KeyboardEvent, useContext, useState } from 'react';
import { Input } from '@headlessui/react';

import { useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';
import { useUserMediator } from '@/entities/user';

const ChatForm: FC = () => {
  const socket = useContext( SocketContext );
  const { id } = useUserMediator();
  const { reciever } = useChatMediator();
  const [ message, setMessage ] = useState<string>( '' );

  function handleSubmit( e: KeyboardEvent<HTMLInputElement> ) {
    if ( message === '' ) return;
    if ( e.key !== 'Enter' ) return;
    socket.emit( 'send_message', { sender: id, reciever: reciever._id, chat: reciever.chat, text: message } );
    setMessage( '' );
  }

  return <Input onKeyUp={e => handleSubmit( e )} onChange={e => setMessage( e.target.value )} value={message} name="message" type="text" placeholder="Enter message" className="block w-full p-3 outline-none bg-zinc-100 rounded-md bg-transparent placeholder:text-zinc-500 focus:border-black" />;
};

export default ChatForm;