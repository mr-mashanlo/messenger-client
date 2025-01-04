import { FC, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useQueryClient } from 'react-query';
import { twMerge } from 'tailwind-merge';

import { MessageResponseType, useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';

const ChatHistory: FC = () => {
  const queryClient = useQueryClient();
  const socket = useContext( SocketContext );
  const { reciever, setReciever } = useChatMediator();
  const [ messages, setMessages ] = useState<Array<MessageResponseType>>( [] );

  useEffect( () => {
    if ( !reciever.chat ) return setMessages( [] );
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
    queryClient.invalidateQueries( [ 'recievers' ] );
    const handleMessage = ( message: MessageResponseType ) => setReciever( { ...reciever, chat: message.chat } );
    socket.on( 'recieve_message', handleMessage );
    return () => { socket.off( 'recieve_message', handleMessage ); };
  }, [ socket, reciever, setReciever, queryClient ] );

  useEffect( () => {
    if ( reciever.chat ) return;
    const handleMessage = () => queryClient.invalidateQueries( [ 'recievers' ] );
    socket.on( 'recieve_message', handleMessage );
    return () => { socket.off( 'recieve_message', handleMessage ); };
  }, [ socket, reciever.chat, queryClient ] );

  return (
    <div className="h-full flex flex-col items-start justify-end gap-2">
      {messages.map( ( message ) => <div key={message._id}  className={twMerge( 'message inline-block max-w-80 min-w-20 px-4 py-2 rounded bg-zinc-100 relative', message.sender === reciever._id ? 'mr-auto' : 'ml-auto' )}>
        <span>{message.text}</span>
        <span className="block text-[0.6rem] text-zinc-400 leading-none"><span className={twMerge( message.opened ? 'text-black' : '' )}>•</span> {moment( message.created ).fromNow()}</span>
      </div> )}
    </div>
  );
};

export default ChatHistory;