import { FC } from 'react';

import { SignInForm } from '@/entities/auth/ui';
// import { io } from 'socket.io-client';

// const socket = io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true } );

export const HomePage: FC = () => {
  // useEffect( () => {
  //   socket.on( 'connection', ( socket ) => { console.log( socket ); } );
  //   return () => { socket.off( 'connection' ); };
  // }, [] );

  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default HomePage;
