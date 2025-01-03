import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from '@headlessui/react';

import { getRecievers, useChatMediator } from '@/entities/chat';
import { findUsers, UserResponseType, validateUsersResponse } from '@/entities/user';

const UserList: FC = () => {
  const { query, setQuery, setReciever } = useChatMediator();
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
        <Button onClick={() => handleCreateChat( user )} key={user._id} data-id={user._id} data-chat={user.chat} className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-zinc-50">
          {user.fullname}
          <span className="block w-3 h-3 rounded-full"></span>
        </Button>
      ) )}
    </div>
  );
};

export default UserList;