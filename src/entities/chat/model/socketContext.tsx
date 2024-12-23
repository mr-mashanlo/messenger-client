import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io( import.meta.env.VITE_REACT_APP_BACK_URL, { withCredentials: true, autoConnect: false } );

const SocketContext = createContext<Socket>( socket );

export default SocketContext;