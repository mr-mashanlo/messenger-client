import { useAuthStore } from '@/entities/auth/model';

const useAuthMediator = () => {
  const sub = useAuthStore( state => state.sub );
  const setSub = useAuthStore( state => state.setSub );

  function login( sub: string ) {
    setSub( sub );
  }

  function logout( ) {
    setSub( null );
  }

  return {
    sub,
    login,
    logout
  };
};

export default useAuthMediator;