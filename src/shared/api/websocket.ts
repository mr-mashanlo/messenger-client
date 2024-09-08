let socket: WebSocket | null = null;

const getWebSocket = (): WebSocket => {
  if ( !socket ) {
    socket = new WebSocket( 'ws://localhost:5000' );
  }
  return socket;
};

export default getWebSocket;