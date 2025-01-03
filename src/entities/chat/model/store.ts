import { create } from 'zustand';

import { UserResponseType } from '@/entities/user';

interface ChatStoreType {
  query: string
  setQuery: ( query: string ) => void
  reciever: UserResponseType
  setReciever: ( reciever: UserResponseType ) => void
}

const useChatStore = create<ChatStoreType>( set => ( {

  query: '',

  setQuery( query ) {
    return set( () => ( { query } ) );
  },

  reciever: {
    _id: '',
    email: '',
    fullname: '',
    chat: ''
  },

  setReciever( reciever ) {
    return set( () => ( { reciever } ) );
  }

} ) );

export default useChatStore;