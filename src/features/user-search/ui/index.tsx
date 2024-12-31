import { FC } from 'react';
import { Input } from '@headlessui/react';

import { useChatMediator } from '@/entities/chat';
import { debounce } from '@/shared/helpers';

const UserSearch: FC = () => {
  const { setQuery } = useChatMediator();
  const setQueryWithThrottling = debounce();

  return <Input onChange={e => setQueryWithThrottling( () => setQuery( e.target.value ) )} name="query" type="text" className="block w-full px-3 py-2 outline-none border border-zinc-200 rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500" />;
};

export default UserSearch;