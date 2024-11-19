import { FC, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true } );

export const HomePage: FC = () => {
  useEffect( () => {
    socket.on( 'connection', ( socket ) => { console.log( socket ); } );
    return () => { socket.off( 'connection' ); };
  }, [] );

  return (
    <div className="min-h-screen px-4 flex items-center justify-center">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eum.</p>
    </div>
  );
};

export default HomePage;
