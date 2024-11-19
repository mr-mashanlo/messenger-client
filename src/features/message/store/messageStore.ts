import { create } from 'zustand';

import { IMessageStore } from '@/entities/message';

const useMessageStore = create<IMessageStore>( set => ( {
  receiver: null,
  recentMessages: [],
  recentAlerts: [],

  setReciever( receiver ) {
    return set( () => ( { receiver } ) );
  },

  setRecentMessages( messages ) {
    return set( () => ( { recentMessages: messages } ) );
  },

  setRecentAlerts( alerts ) {
    return set( () => ( { recentAlerts: alerts } ) );
  }

} ) );

export default useMessageStore;