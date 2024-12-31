import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from '@headlessui/react';

import { getRecievers, useChatMediator } from '@/entities/chat';
import { findUsers, UserResponseType, validateUsersResponse } from '@/entities/user';

const UserList: FC = () => {
  const { query, setReciever } = useChatMediator();
  const [ users, setUsers ] = useState<Array<UserResponseType>>( [] );

  useQuery( {
    queryKey: [ 'recievers', query ],
    queryFn: () => getRecievers(),
    enabled: query === '',
    onSuccess: data => {
      try {
        const result = validateUsersResponse( data );
        setUsers( result );
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  useQuery( {
    queryKey: [ 'users', query ],
    queryFn: () => findUsers( query ),
    enabled: query !== '',
    onSuccess: data => {
      try {
        const result = validateUsersResponse( data );
        setUsers( result );
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return (
    <div>
      {users.map( user => (
        <Button onClick={() => setReciever( user )} key={user._id} data-id={user._id} data-chat={user.chat} className="w-full p-4 text-left hover:bg-zinc-50">{user.fullname}</Button>
      ) )}
    </div>
  );
};

export default UserList;