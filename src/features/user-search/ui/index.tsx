import { FC } from 'react';
import { Input } from '@headlessui/react';

import { useChatMediator } from '@/entities/chat';

const UserSearch: FC = () => {
  const { query, setQuery } = useChatMediator();

  return <Input onChange={e => setQuery( e.target.value )} value={query} name="query" type="text" className="block w-full px-3 py-2 outline-none bg-zinc-100 rounded-md bg-transparent placeholder:text-zinc-500 focus:border-black" />;
};

export default UserSearch;