import { FC, HTMLAttributes } from 'react';

import ChatOptions from './chatOptions';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
}

const ChatHeader: FC<Props> = ( { title } ) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <p>{title}</p>
      <ChatOptions />
    </div>
  );
};

export default ChatHeader;