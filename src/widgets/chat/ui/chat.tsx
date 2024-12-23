import { FC, useContext, useEffect } from 'react';

import { ChatHeader, ConnectedMessageForm, ConnectedUserForm } from '@/features/chat/ui';
import { SocketContext } from '@/entities/chat/model';

const Chat: FC = () => {
  const socket = useContext( SocketContext );

  useEffect( () => {
    socket.connect();
    return () => { socket.disconnect(); };
  }, [ socket ] );

  return (
    <div className="min-h-[30rem] h-full w-full grid grid-cols-[1fr_2fr] border">
      <div className="flex flex-col border-r">
        <div className="p-3 border-b">
          <ConnectedUserForm />
        </div>
        <div className="h-full p-3">
          <div className="grid gap-2">
            <button data-id="6763faf7b3609ba32b11df97" className="w-full px-3 py-2 text-left rounded-md bg-zinc-50 hover:bg-zinc-100">John Doe (ONE)</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="p-3 border-b">
          <ChatHeader title="Header" />
        </div>
        <div className="h-full"></div>
        <div className="p-3 border-t">
          <ConnectedMessageForm />
        </div>
      </div>
    </div>
  );
};

export default Chat;