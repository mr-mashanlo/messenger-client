import { FC, useState } from 'react';
import { Input } from '@headlessui/react';

const ChatForm: FC = () => {
  const [ message, setMessage ] = useState<string>( '' );

  return <Input onChange={e => setMessage( e.target.value )} value={message} name="message" type="text" className="block w-full px-3 py-2 outline-none border border-zinc-200 rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" />;
};

export default ChatForm;