import { FC, useContext } from 'react';
import { ArrowLeft, EllipsisVertical } from 'lucide-react';
import { useQueryClient } from 'react-query';
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { clearChat, deleteChat, useChatMediator } from '@/entities/chat';
import SocketContext from '@/entities/chat/model/context';

const ChatHeader: FC = () => {
  const socket = useContext( SocketContext );
  const queryClient = useQueryClient();
  const { reciever, setReciever } = useChatMediator();

  async function hanleClearChat() {
    try {
      if ( !reciever.chat ) return;
      await clearChat( reciever.chat );
      socket.emit( 'fetch_messages', reciever.chat );
    } catch ( error ) {
      console.log( error );
    }
  };

  async function hanleDeleteChat() {
    try {
      if ( !reciever.chat ) return;
      await deleteChat( reciever.chat );
      await queryClient.invalidateQueries( [ 'recievers' ] );
      setReciever( { _id: '', email: '', fullname: '', chat: '' } );
    } catch ( error ) {
      console.log( error );
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Button onClick={() => setReciever( { _id: '', email: '', fullname: '' } )} className="p-2 rounded-full bg-zinc-100"><ArrowLeft className="w-5 h-5" /></Button>
        <p>{reciever.fullname}</p>
      </div>
      <Menu>
        <MenuButton className="p-2 rounded-full bg-zinc-100"><EllipsisVertical className="w-5 h-5" /></MenuButton>
        <MenuItems transition anchor="bottom end" className="w-48 mt-2 p-1 bg-white border border-black rounded">
          <MenuItem><Button onClick={() => hanleClearChat()} className="w-full p-2 text-left rounded hover:bg-zinc-100">Clear chat</Button></MenuItem>
          <div className="my-[0.2rem] h-px bg-black" />
          <MenuItem><Button onClick={() => hanleDeleteChat()} className="w-full p-2 text-left rounded text-red-500 hover:bg-zinc-100">Delete chat</Button></MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ChatHeader;