import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { IUser } from '@/entities/user';
import { useMessageStore } from '@/features/message/store';
import { SocketContext } from '@/shared/context';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  user: IUser,
  className?: string
}

const UserButton: FC<Props> = ( { user, className, ...others } ) => {
  const socket = useContext( SocketContext );
  const recieverId = useMessageStore( state => state.receiver?._id );
  const setReciever = useMessageStore( state => state.setReciever );

  function handleButtonClick( user: IUser ) {
    setReciever( user );
    socket?.emit( 'fetch_messages', user._id );
  }

  return (
    <button {...others} onClick={() => handleButtonClick( user )} className={twMerge( 'w-full p-4 flex items-center gap-4 border-l-4', className, recieverId === user._id ? 'border-black' : 'border-transparent' )}>
      <span className="block w-8 h-8 rounded-full bg-black"></span>
      <span>{user.fullname || user.email}</span>
      <span className="block w-4 h-4 ml-auto rounded-full"></span>
    </button>
  );
};

export default UserButton;