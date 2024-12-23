import { useAuthStore } from '@/entities/auth/model';

const useAuthMediator = () => {
  const sub = useAuthStore( state => state.sub );
  const setSub = useAuthStore( state => state.setSub );

  return { sub, setSub };
};

export default useAuthMediator;