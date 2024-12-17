import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStoreType {
  sub: string | null
  setSub: ( id: string | null ) => void
}

const useAuthStore = create( persist<AuthStoreType>( set => ( {
  sub: '',

  setSub( sub ) {
    return set( () => ( { sub } ) );
  }
} ), { name: 'auth' } ) );

export default useAuthStore;