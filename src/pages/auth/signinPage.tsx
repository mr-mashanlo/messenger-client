import { FC } from 'react';
import { SigninForm } from '@/features/auth/ui';

const SigninPage: FC = () => {
  return (
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <SigninForm />
    </div>
  );
};

export default SigninPage;