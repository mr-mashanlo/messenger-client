import { FC } from 'react';

import { ConnectedSignUpForm } from '@/features/auth/ui';

export const SignUpPage: FC = () => {
  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <ConnectedSignUpForm />
    </div>
  );
};

export default SignUpPage;