import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const SocketContext = createContext<Socket>( io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true, autoConnect: false } ) );

export default SocketContext;