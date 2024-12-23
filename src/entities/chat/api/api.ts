import { Socket } from 'socket.io-client';

export function handleConnection() {
  return 'socket';
};

export function handleDisconnect( id: string ) {
  console.log( id );
};

export function handleSendMessage( socket: Socket, message: { text: string, sender: string, reciever: string } ) {
  socket.emit( 'send_message', message );
};

export function handleRecieveMessage( socket: Socket ) {
  let response = null;
  socket.on( 'recieve_message', message => { response = message; } );
  return response;
};

export function handleReadMessage( message: string ) {
  console.log( message );
};

export function handleFetchChat( id: string ) {
  console.log( id );
};

export function handleDeleteChat( id: string ) {
  console.log( id );
};