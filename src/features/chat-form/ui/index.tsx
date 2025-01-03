import { FC, KeyboardEvent, useContext, useState } from 'react';
import { Input } from '@headlessui/react';

import { useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';
import { useUserMediator } from '@/entities/user';

const ChatForm: FC = () => {
  const { id } = useUserMediator();
  const { reciever } = useChatMediator();
  const socket = useContext( SocketContext );
  const [ message, setMessage ] = useState<string>( '' );

  function handleSubmit( e: KeyboardEvent<HTMLInputElement> ) {
    if ( message === '' ) return;
    if ( e.key !== 'Enter' ) return;
    if ( reciever.chat === '' ) return;
    socket.emit( 'send_message', { sender: id, reciever: reciever._id, chat: reciever.chat, text: message } );
    setMessage( '' );
  }

  return <Input onKeyUp={e => handleSubmit( e )} onChange={e => setMessage( e.target.value )} value={message} name="message" type="text" className="block w-full px-3 py-2 outline-none border border-zinc-200 rounded-md bg-transparent placeholder:text-zinc-500 focus:border-black" />;
};

export default ChatForm;