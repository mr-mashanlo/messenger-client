import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@headlessui/react';

import { useChatMediator } from '@/entities/chat';

const ChatHeader: FC = () => {
  const { reciever, setReciever } = useChatMediator();

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Button onClick={() => setReciever( { _id: '', email: '', fullname: '' } )} className="p-2 rounded-full bg-zinc-50"><ArrowLeft size={23} /></Button>
        <p>{reciever.fullname}</p>
      </div>
    </div>
  );
};

export default ChatHeader;