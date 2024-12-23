import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChatStoreType {
  reciever: string | null
  setReciever: ( reciever: string | null ) => void
}

const useChatStore = create( persist<ChatStoreType>( set => ( {
  reciever: '6765bcd0dec0eab20d7030a1',

  setReciever( reciever ) {
    return set( () => ( { reciever } ) );
  }
} ), { name: 'chat' } ) );

export default useChatStore;