import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { SignInWidget } from '@/widgets/auth/ui';
import { useAuthStore } from '@/entities/auth/model';

export const SignInPage: FC = () => {
  const id = useAuthStore( state => state.id );

  if ( id ) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <SignInWidget />
    </div>
  );
};

export default SignInPage;