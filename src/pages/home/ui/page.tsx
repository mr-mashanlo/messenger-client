import { FC, useContext, useEffect } from 'react';
import { MessageCircle, UserRound } from 'lucide-react';
import { When } from 'react-if';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { ChatForm } from '@/features/chat-form';
import { ChatHeader } from '@/features/chat-header';
import { ChatHistory } from '@/features/chat-history';
import { UserCard } from '@/features/user-card';
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
    <div className="min-h-screen px-4 py-4 grid items-center">
      <div className="min-h-[30rem] max-h-[calc(100vh-2rem)] h-full w-full grid grid-cols-[1fr_2fr] border border-zinc-200 overflow-hidden">
        <TabGroup className="grid grid-cols-[1fr_6fr]">
          <TabList className="h-full p-3 flex flex-col justify-between border-r border-zinc-200 bg-zinc-50">
            <Tab key="chat" className="w-11 h-11 flex items-center justify-center bg-zinc-100 rounded-full"><MessageCircle className="w-5 h-5" /></Tab>
            <Tab key="settings" className="w-11 h-11 flex items-center justify-center bg-zinc-100 rounded-full"><UserRound className="w-5 h-5" /></Tab>
          </TabList>
          <TabPanels>
            <TabPanel key="chat" className="h-full border-r border-zinc-200">
              <div className="p-3 border-b border-zinc-200"><UserSearch /></div>
              <div className="h-full overflow-auto scroll-hidden"><UserList /></div>
            </TabPanel>
            <TabPanel key="settings" className="h-full border-r border-zinc-200">
              <div className="px-6 py-10"><UserCard /></div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <div className="flex flex-col overflow-hidden">
          <When condition={reciever._id}>
            <div className="p-3 border-b border-zinc-200"><ChatHeader /></div>
            <div className="h-full p-3 overflow-auto scroll-hidden flex flex-col justify-end"><ChatHistory /></div>
            <div className="p-3 border-t border-zinc-200"><ChatForm /></div>
          </When>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
