import { FC, HTMLAttributes } from 'react';

import { UserResponseType } from '../model/schema';
import User from './user';

interface Props extends HTMLAttributes<HTMLDivElement> {
  users: Array<UserResponseType>
}

const UserList: FC<Props> = ( { users } ) => {
  return (
    <div>
      {users.map( user => <User key={user._id} user={user} /> )}
    </div>
  );
};

export default UserList;