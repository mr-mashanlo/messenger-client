import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStoreType {
  id: string
  setID: ( id: string ) => void
}

const useAuthStore = create( persist<AuthStoreType>( set => ( {
  id: '',

  setID( id: string ) {
    return set( () => ( { id } ) );
  }
} ), { name: 'auth' } ) );

export default useAuthStore;