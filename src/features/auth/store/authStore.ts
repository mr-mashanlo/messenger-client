import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '@/entities/auth/types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  id: '',
  isAuth: false,

  setID( id ) {
    set( () => ( { id } ) );
  },

  setIsAuth( status ) {
    set( () => ( { isAuth: status } ) );
  }

} ), { name: 'auth' } ) );

export default useAuthStore;