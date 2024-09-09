import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '@/entities/auth/types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  id: '',

  setID( id ) {
    return set( () => ( { id } ) );
  }
} ), { name: 'auth' } ) );

export default useAuthStore;