import { FC } from 'react';
import { SignupForm } from '@/features/auth/ui';

const SignupPage: FC = () => {
  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <SignupForm />
    </div>
  );
};

export default SignupPage;