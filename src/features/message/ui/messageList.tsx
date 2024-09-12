import { FC, useContext, useEffect } from 'react';
import { SocketContext } from '@/shared/context';
import { twMerge } from 'tailwind-merge';
import { useAuthStore } from '@/features/auth/store';
import { useMessageStore } from '../store';
import moment from 'moment';

const MessageList: FC = () => {
  const socket = useContext( SocketContext );
  const senderId = useAuthStore( state => state.id );
  const receiver = useMessageStore( state => state.receiver?._id );
  const recentMessages = useMessageStore( state => state.recentMessages );
  const recentAlerts = useMessageStore( state => state.recentAlerts );
  const setRecentMessages = useMessageStore( state => state.setRecentMessages );
  const setRecentAlerts = useMessageStore( state => state.setRecentAlerts );

  useEffect( () => {
    socket?.on( 'initialize_messages', messages => setRecentMessages( messages ) );
    socket?.on( 'message', message => {
      setRecentMessages( [ ...recentMessages, message ] );
      setRecentAlerts( [ ...recentAlerts, message.senderId === receiver ? message.senderId : '' ] );
    } );
  }, [ socket, recentMessages, recentAlerts, receiver, setRecentMessages, setRecentAlerts ] );

  return (
    <div className="flex flex-col items-start gap-2 overflow-hidden">
      {recentMessages.map( ( message, index ) => (
        <div key={index} className={twMerge( 'inline-block px-3 py-2 rounded-lg bg-gray-100', message.senderId === senderId ? 'ml-auto' : '' )}>
          <span>{message.content.text}</span>
          <span className="block text-gray-300 text-xs">{moment( message.timestamp ).fromNow()}</span>
        </div>
      ) )}
    </div>
  );
};

export default MessageList;