import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IUser } from '@/entities/user/types';
import { useChatStore } from '@/features/chat/store';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  user: IUser,
  className?: string
}

const UserButton: FC<Props> = ( { user, className, ...others } ) => {
  const reciever = useChatStore( state => state.receiver );
  const alerts = useChatStore( state => state.alerts );
  const setReciever = useChatStore( state => state.setReciever );
  const setAlerts = useChatStore( state => state.setAlerts );

  function handleButtonClick( user: IUser ) {
    setReciever( user );
    if ( alerts.includes( user._id ) ) { setAlerts( alerts.filter( alert => alert !== user._id ) ); }
  }

  return (
    <button {...others} onClick={() => handleButtonClick( user )} className={twMerge( 'w-full p-4 flex items-center gap-4 border-l-4', className, reciever?._id === user._id ? 'border-black' : 'border-transparent' )}>
      <span className="block w-8 h-8 rounded-full bg-black"></span>
      <span>{user.fullname || user.email}</span>
      <span className={twMerge( 'block w-4 h-4 ml-auto rounded-full', alerts.includes( user._id ) ? 'bg-black' : user.online ? 'bg-green-200' : 'bg-gray-200' )}></span>
    </button>
  );
};

export default UserButton;