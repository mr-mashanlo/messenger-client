import { create } from 'zustand';
import { IMessageStore } from '@/entities/message';

const useChatStore = create<IMessageStore>( set => ( {
  messages: [],
  receiverId: '',

  addToMessages( message ) {
    return set( state => ( { messages: [ ...state.messages, message ] } ) );
  },

  setRecieverId( id ) {
    return set( () => ( { receiverId: id } ) );
  }
} ) );

export default useChatStore;