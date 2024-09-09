import { create } from 'zustand';
import { IMessageStore } from '@/entities/message';

const useChatStore = create<IMessageStore>( set => ( {
  receiver: null,
  alerts: [],

  setReciever( receiver ) {
    return set( () => ( { receiver } ) );
  },

  setAlerts( alerts ) {
    return set( () => ( { alerts } ) );
  }

} ) );

export default useChatStore;