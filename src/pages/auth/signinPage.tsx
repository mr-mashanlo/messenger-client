import { FC } from 'react';

import { ConnectedSignInForm } from '@/features/auth/ui';

export const SignInPage: FC = () => {
  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <ConnectedSignInForm />
    </div>
  );
};

export default SignInPage;