import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IMessage } from '@/entities/message';
import { useChatStore } from '../store';

interface Props {
  message: IMessage
}

const Message: FC<Props> = ( { message } ) => {
  const receiverId = useChatStore( state => state.receiverId );
  return (
    <div className={twMerge( 'min-w-24 px-4 py-2 bg-gray-100 rounded-md', message.receiverId === receiverId ? 'ml-auto' : '' )}>
      <span>{message.content}</span>
      <span className="block text-[0.6rem] leading-none text-gray-300">{message.timestamp}</span>
    </div>
  );
};

export default Message;