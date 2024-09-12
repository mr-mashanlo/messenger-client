import { FC } from 'react';
import { IUser } from '@/entities/user';
import UserButton from './userButton';

interface Props {
  users: Array<IUser>
}

const UserList: FC<Props> = ( { users } ) => {
  return (
    <div>
      {users.map( user => ( <UserButton key={user._id} user={user} /> ) )}
    </div>
  );
};

export default UserList;