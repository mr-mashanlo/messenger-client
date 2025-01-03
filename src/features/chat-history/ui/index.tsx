import { FC, useContext, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { MessageResponseType, useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';

const ChatHistory: FC = () => {
  const { reciever, setReciever } = useChatMediator();
  const socket = useContext( SocketContext );
  const [ messages, setMessages ] = useState<Array<MessageResponseType>>( [] );

  useEffect( () => {
    if ( !reciever.chat ) return;
    socket.emit( 'join_room', reciever.chat );
    socket.emit( 'fetch_messages', reciever.chat );
  }, [ socket, reciever.chat ] );

  useEffect( () => {
    const handleMessages = ( messages: Array<MessageResponseType> ) => setMessages( messages );
    socket.on( 'recieve_messages', handleMessages );
    return () => { socket.off( 'recieve_messages', handleMessages ); };
  }, [ socket ] );

  useEffect( () => {
    const handleMessage = ( message: MessageResponseType ) => setMessages( prev => [ ...prev, message ] );
    socket.on( 'recieve_message', handleMessage );
    return () => { socket.off( 'recieve_message', handleMessage ); };
  }, [ socket ] );

  useEffect( () => {
    if ( reciever.chat ) return;
    const handleMessage = ( message: MessageResponseType ) => setReciever( { ...reciever, chat: message.chat } );
    socket.on( 'recieve_message', handleMessage );
    return () => { socket.off( 'recieve_message', handleMessage ); };
  }, [ socket, reciever, setReciever ] );

  return (
    <div className="h-full flex flex-col items-start justify-end gap-2">
      {messages.map( message => <div key={message._id} className={twMerge( 'inline-block px-4 py-2 rounded bg-zinc-100', message.sender === reciever._id ? 'mr-auto' : 'ml-auto' )}>{message.text}</div> )}
    </div>
  );
};

export default ChatHistory;