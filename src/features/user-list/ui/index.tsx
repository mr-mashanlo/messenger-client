import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from '@headlessui/react';

import { getRecievers, setQuery, useChatMediator } from '@/entities/chat';
import { findUsers, UserResponseType, validateUsersResponse } from '@/entities/user';

const UserList: FC = () => {
  const { query, setReciever } = useChatMediator();
  const [ users, setUsers ] = useState<Array<UserResponseType>>( [] );

  useQuery( {
    queryKey: [ 'recievers', query ],
    queryFn: () => getRecievers(),
    enabled: query === '',
    onSuccess: data => validateUserData( data )
  } );

  useQuery( {
    queryKey: [ 'users', query ],
    queryFn: () => findUsers( query ),
    enabled: query !== '',
    onSuccess: data => validateUserData( data )
  } );

  function validateUserData( data: unknown ) {
    try {
      const result = validateUsersResponse( data );
      setUsers( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  function handleCreateChat( user: UserResponseType ) {
    setReciever( user );
    if ( query ) setQuery( '' );
  }

  return (
    <div>
      {users.map( user => (
        <Button onClick={() => handleCreateChat( user )} key={user._id} data-id={user._id} data-chat={user.chat} className="w-full p-2 text-left flex items-center gap-4 border-b border-zinc-200 hover:bg-zinc-50">
          <span className="block w-11 h-11 rounded-full bg-zinc-100"></span>
          {user.fullname}
        </Button>
      ) )}
    </div>
  );
};

export default UserList;