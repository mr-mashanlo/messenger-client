import { FC, HTMLAttributes } from 'react';
import { Button } from '@headlessui/react';

import { UserResponseType } from '../model';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  user: UserResponseType
}

const User: FC<Props> = ( { user } ) => {
  return (
    <Button data-id={user._id}>{user.fullname}</Button>
  );
};

export default User;