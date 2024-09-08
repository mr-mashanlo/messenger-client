import { FC } from 'react';
import { IUser } from '@/entities/user/types';
import UserButton from './userButton';

interface Props {
  users: Array<IUser>
}

const UserList: FC<Props> = ( { users } ) => {
  return (
    <div className="flex flex-col gap-3 overflow-auto scroll-hidden">
      {users.map( user => <UserButton key={user._id} user={user} /> )}
    </div>
  );
};

export default UserList;