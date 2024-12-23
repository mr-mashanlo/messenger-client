import { FC, HTMLAttributes } from 'react';

import { MessageResponseType } from '../model/schema';
import Message from './message';

interface Props extends HTMLAttributes<HTMLDivElement> {
  messages: Array<MessageResponseType>
}

const MessageList: FC<Props> = ( { messages } ) => {
  return (
    <div className="flex flex-col gap-2">
      {messages.map( message => <Message key={message._id} message={message} /> )}
    </div>
  );
};

export default MessageList;