import { FC, useEffect, useState } from 'react';
import { IUser } from '@/entities/user/types';
import { getWebsocket } from '@/shared/api';
import UserButton from './userButton';

interface Props {
  users: Array<IUser>
}

const UserList: FC<Props> = ( { users } ) => {
  const socket = getWebsocket();
  const [ onlineUsersIDs, setOnlineUsersIDs ] = useState<Array<string>>( [] );

  useEffect( () => {
    function handleUserConnected() {
      socket.onmessage = ( event ) => {
        const response = JSON.parse( event.data );
        if ( response.type === 'user_connected' ) {
          setOnlineUsersIDs( [ ...onlineUsersIDs, response.userId ] );
        }
        if ( response.type === 'user_disconnected' ) {
          setOnlineUsersIDs( onlineUsersIDs.filter( userID => userID !== response.userId ) );
        }
      };
    }

    handleUserConnected();
    return () => handleUserConnected();
  }, [ socket, onlineUsersIDs ] );

  function updateOnlineStatus( users: Array<IUser> ) {
    return users.map( user => ( onlineUsersIDs.includes( user._id ) ? { ...user, online: true } : { ...user, online: false } ) );
  }

  return (
    <div>
      {updateOnlineStatus( users ).map( user => ( <UserButton key={user._id} user={user} /> ) )}
    </div>
  );
};

export default UserList;