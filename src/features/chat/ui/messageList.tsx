import { FC } from 'react';
import Message from './message';
import { IMessage } from '@/entities/message';

interface Props {
  messages: Array<IMessage>
}

const MessageList: FC<Props> = ( { messages } ) => {
  return (
    <div className="w-full h-[23.15rem] p-3 flex flex-col gap-3 items-start justify-end bg-gray-200 rounded-lg overflow-auto">
      {messages.map( message => <Message key={message.timestamp} message={message} /> )}
    </div>
  );
};

export default MessageList;