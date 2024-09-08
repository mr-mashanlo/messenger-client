import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IUser } from '@/entities/user/types';
import { Button } from '@/shared/ui';
import { useChatStore } from '../store';

interface Props {
  user: IUser
}

const UserButton: FC<Props> = ( { user } ) => {
  const setRecieverId = useChatStore( state => state.setRecieverId );
  return (
    <Button onClick={() => setRecieverId( user._id )} className="bg-gray-100 text-black">
      <span className="flex items-center justify-between gap-4">
        <span>{user.fullname || user.email}</span>
        <span className={twMerge( 'block w-4 h-4 rounded-full', user.online ? 'bg-green-300' : 'bg-gray-200' )}></span>
      </span>
    </Button>
  );
};

export default UserButton;