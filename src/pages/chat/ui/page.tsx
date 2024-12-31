import { FC } from 'react';

import { ChatForm } from '@/features/chat-form';
import { ChatHeader } from '@/features/chat-header';
import { UserList } from '@/features/user-list';
import { UserSearch } from '@/features/user-search';
import { useChatMediator } from '@/entities/chat';

export const ChatPage: FC = () => {
  const { reciever } = useChatMediator();

  return (
    <div className="min-h-screen px-60 py-10 grid items-center">
      <div className="min-h-[30rem] h-full w-full grid grid-cols-[1fr_2fr] border">
        <div className="flex flex-col border-r">
          <div className="p-3 border-b"><UserSearch /></div>
          <div className="h-full"><UserList /></div>
        </div>
        <div className="flex flex-col">
          {
            reciever._id &&
            <>
              <div className="p-3 border-b"><ChatHeader /></div>
              <div className="h-full"></div>
              <div className="p-3 border-t"><ChatForm /></div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
