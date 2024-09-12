import { FC } from 'react';
import { useMessageStore } from '../store';

const MessageHeader: FC = () => {
  const receiver = useMessageStore( state => state.receiver );

  return (
    <div className="w-full flex items-center gap-4">
      <span className="block w-8 h-8 rounded-full bg-black"></span>
      <span>{receiver?.fullname || receiver?.email}</span>
    </div>
  );
};

export default MessageHeader;