import { FC, HTMLAttributes } from 'react';

import { MessageResponseType } from '../../chat/model';

interface Props extends HTMLAttributes<HTMLDivElement> {
  message: MessageResponseType
}

const Message: FC<Props> = ( { message } ) => {
  return (
    <p>
      <span className="block p-2 bg-zinc-100 rounded-md">{message.text}</span>
      <span className="block mt-1 text-right">{message.created}</span>
    </p>
  );
};

export default Message;