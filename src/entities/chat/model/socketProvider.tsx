import { FC, ReactNode } from 'react';
import { io } from 'socket.io-client';

import SocketContext from './socketContext';

interface Props {
  children: ReactNode
}

const SocketProvider: FC<Props> = ( { children } ) => {
  const socket = io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true, autoConnect: false } );

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;