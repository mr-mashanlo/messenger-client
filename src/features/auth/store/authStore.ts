import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '@/entities/auth';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  id: '',

  setID( id: string ) {
    return set( () => ( { id } ) );
  }
} ), { name: 'auth' } ) );

export default useAuthStore;