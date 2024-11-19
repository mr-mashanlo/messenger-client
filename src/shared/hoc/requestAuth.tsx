import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@/features/auth/store';

interface Props {
  children: ReactNode
}

const RequestAuth: FC<Props> = ( { children } ) => {
  const id = useAuthStore( state => state.id );

  if ( !id ) return <Navigate to="/signin" />;

  return children;
};

export default RequestAuth;