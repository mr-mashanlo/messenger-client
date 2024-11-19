import { FC } from 'react';

import { useMessageStore } from '../store';
import MessageForm from './messageForm';
import MessageHeader from './messageHeader';
import MessageList from './messageList';

const MessageBlock: FC = () => {
  const receiver = useMessageStore( state => state.receiver );

  if ( !receiver ) return null;

  return (
    <div className="max-h-[calc(100vh-2rem)] h-full flex flex-col">
      <div className="p-4 bg-white border-b-2 border-gray-100"><MessageHeader /></div>
      <div className="h-full p-4 overflow-auto scroll-hidden"><MessageList /></div>
      <div className="p-4 bg-white border-t-2 border-gray-100"><MessageForm /></div>
    </div>
  );
};

export default MessageBlock;