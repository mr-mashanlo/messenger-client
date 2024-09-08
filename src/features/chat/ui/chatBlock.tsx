import { FC, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useChatStore } from '../store';
import { useAuthStore } from '@/features/auth/store';
import UserList from './userList';
import MessageList from './messageList';
import MessageForm from './messageForm';
import { getWebsocket } from '@/shared/api';
import { IUser } from '@/entities/user/types';

const ChatBlock: FC = () => {
  const socket = getWebsocket();
  const senderId = useAuthStore( state => state.id );
  const receiverId = useChatStore( state => state.receiverId );
  const messages = useChatStore( state => state.messages );
  const addToMessages = useChatStore( state => state.addToMessages );
  const [ users, setUsers ] = useState<Array<IUser>>( [] );

  useEffect( () => {
    socket.onmessage = ( event ) => {
      const response = JSON.parse( event.data );
      if ( response.type === 'users' ) {
        setUsers( response.data );
      } else if ( response.type === 'message' ) {
        addToMessages( { content: response.data, timestamp: Date.now(), senderId: response.receiverId, receiverId: response.senderId } );
      }
    };
  }, [ socket, addToMessages, senderId, receiverId ] );

  const excludeMeFromUsers = () => {
    return users.filter( user => user._id !== senderId );
  };

  const filterMessagesByUser = () => {
    const filteredMessages = receiverId === senderId ? messages.filter( message => message.senderId === receiverId ) : messages.filter( message => message.receiverId === receiverId );
    return filteredMessages;
  };

  return (
    <div className="w-[50rem] h-[32.7rem] mx-auto grid grid-cols-[1.2fr_2fr] bg-gray-100 rounded-xl overflow-hidden">
      <div className="p-3 bg-gray-200">
        <UserList users={excludeMeFromUsers()} />
      </div>
      <div className="p-3">
        <If condition={receiverId.length}>
          <Then>
            <div className="h-full flex flex-col gap-3">
              <div className="p-4 bg-gray-200 rounded-lg">
                {users.find( user => user._id === receiverId )?.email}
              </div>
              <MessageList messages={filterMessagesByUser()} />
              <MessageForm />
            </div>
          </Then>
          <Else>
            <div className="h-full flex flex-col justify-center gap-3 text-center">
              <p className="px-10 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quis?</p>
            </div>
          </Else>
        </If>
      </div>
    </div>
  );
};

export default ChatBlock;