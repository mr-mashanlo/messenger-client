import { FC, ReactNode, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { useAuthStore } from '@/entities/auth/model';

import SocketContext from './socketContext';

interface Props {
  children: ReactNode
}

const SocketProvider: FC<Props> = ( { children } ) => {
  const id = useAuthStore( state => state.id );
  const [ socket, setSocket ] = useState<Socket | null>( null );

  useEffect( () => {
    if ( id ) {
      setSocket( io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true } ) );
    };
  }, [ id ] );

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;