import { FC, useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useQueryClient } from 'react-query';
import { twMerge } from 'tailwind-merge';

import { MessageResponseType, useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';
import { useUserMediator } from '@/entities/user';

const ChatHistory: FC = () => {
  const queryClient = useQueryClient();
  const socket = useContext( SocketContext );
  const { id } = useUserMediator();
  const { reciever, setReciever } = useChatMediator();
  const [ messages, setMessages ] = useState<Array<MessageResponseType>>( [] );

  useEffect( () => {

    const handleMessages = ( messages: Array<MessageResponseType> ) => {
      setMessages( messages );
    };

    const handleMessage = ( message: MessageResponseType ) => {
      if ( !reciever.chat ) {
        queryClient.invalidateQueries( [ 'recievers' ] );
        setReciever( { ...reciever, chat: message.chat } );
      }
      setMessages( prev => [ ...prev, message ] );
    };

    if ( reciever.chat ) {
      socket.emit( 'join_room', reciever.chat );
      socket.emit( 'fetch_messages', reciever.chat );
      socket.on( 'recieve_messages', handleMessages );
    } else {
      setMessages( [] );
    }

    socket.on( 'recieve_message', handleMessage );

    return () => {
      socket.off( 'recieve_messages', handleMessages );
      socket.off( 'recieve_message', handleMessage );
    };

  }, [ socket, queryClient, reciever, setReciever ] );

  useEffect( () => {

    if ( !messages.length ) return;
    const unreaded = messages.filter( message => message.opened === false && message.sender !== id ).map( message => message._id );

    if ( !unreaded.length ) return;
    socket.emit( 'open_messages', { chat: reciever.chat, messages: unreaded } );

  }, [ socket, id, reciever.chat, messages ] );

  useEffect( () => {

    const handleReadMessage = ( readedMessages: Array<string> ) => {
      const updatedMessages = [ ...messages ].map( message => readedMessages.includes( message._id ) ? { ...message, opened: true } : message );
      setMessages( updatedMessages );
    };

    socket.on( 'readed_messages', handleReadMessage );

    return () => {
      socket.off( 'readed_messages', handleReadMessage );
    };

  }, [ socket, reciever.chat, messages ] );

  return (
    <div  className="flex flex-col items-start justify-end gap-2">
      {messages.map( ( message ) => <div key={message._id}  className={twMerge( 'message inline-block max-w-80 min-w-20 px-4 py-2 rounded bg-zinc-100 relative', message.sender === reciever._id ? 'mr-auto' : 'ml-auto' )}>
        <span>{message.text}</span>
        <span className="block text-[0.6rem] text-zinc-400 leading-none"><span className={twMerge( message.opened ? '' : 'text-black' )}>•</span> {moment( message.created ).fromNow()}</span>
      </div> )}
    </div>
  );
};

export default ChatHistory;