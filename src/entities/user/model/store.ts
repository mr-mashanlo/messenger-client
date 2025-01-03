import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStoreType {
  id: string | null
  setID: ( id: string | null ) => void
}

const useUserStore = create( persist<UserStoreType>( set => ( {

  id: '',

  setID( id ) {
    return set( () => ( { id } ) );
  }

} ), { name: 'user' } ) );

export default useUserStore;