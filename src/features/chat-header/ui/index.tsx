import { FC } from 'react';
import { ArrowLeft, EllipsisVertical } from 'lucide-react';
import { useQueryClient } from 'react-query';
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { clearChat, deleteChat, useChatMediator } from '@/entities/chat';

const ChatHeader: FC = () => {
  const queryClient = useQueryClient();
  const { reciever, setReciever } = useChatMediator();

  async function hanleClearChat() {
    try {
      if ( !reciever.chat ) return;
      await clearChat( reciever.chat );
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
        <Button onClick={() => setReciever( { _id: '', email: '', fullname: '' } )} className="p-2 rounded-full bg-zinc-50"><ArrowLeft size={23} /></Button>
        <p>{reciever.fullname}</p>
      </div>
      <Menu>
        <MenuButton className="p-2 rounded-full bg-zinc-50"><EllipsisVertical size={23} /></MenuButton>
        <MenuItems transition anchor="bottom end" className="w-40 mt-2 p-1 bg-white border border-black rounded">
          <MenuItem><Button onClick={() => hanleClearChat()} className="w-full p-2 text-left rounded text-red-500 hover:bg-zinc-50">Clear chat</Button></MenuItem>
          <MenuItem><Button onClick={() => hanleDeleteChat()} className="w-full p-2 text-left rounded text-red-500 hover:bg-zinc-50">Delete chat</Button></MenuItem>
          <MenuItem><Button className="w-full p-2 text-left rounded hover:bg-zinc-50">Settings</Button></MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ChatHeader;