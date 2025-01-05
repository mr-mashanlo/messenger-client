import { FC, useContext, useEffect } from 'react';
import { When } from 'react-if';

import { ChatForm } from '@/features/chat-form';
import { ChatHeader } from '@/features/chat-header';
import { ChatHistory } from '@/features/chat-history';
import { UserList } from '@/features/user-list';
import { UserSearch } from '@/features/user-search';
import { useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';

export const HomePage: FC = () => {
  const socket = useContext( SocketContext );
  const { reciever } = useChatMediator();

  useEffect( () => {
    socket.connect();
    return () => { socket.disconnect(); };
  }, [ socket ] );

  return (
    <div className="min-h-screen px-60 py-10 grid items-center">
      <div  className="min-h-[30rem] max-h-[calc(100vh-5rem)] h-full w-full grid grid-cols-[1fr_2fr] border border-black overflow-hidden">
        <div className="flex flex-col border-r border-black overflow-hidden">
          <div className="p-3 border-b border-black"><UserSearch /></div>
          <div className="h-full overflow-auto scroll-hidden"><UserList /></div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <When condition={reciever._id}>
            <div className="p-3 border-b border-black"><ChatHeader /></div>
            <div className="h-full p-3 overflow-auto scroll-hidden flex flex-col justify-end"><ChatHistory /></div>
            <div className="p-3 border-t border-black"><ChatForm /></div>
          </When>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
