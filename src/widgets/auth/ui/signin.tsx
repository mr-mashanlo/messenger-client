import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SignInForm } from '@/features/auth/ui';

const SignInWidget: FC = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-bold text-center">Sign in</h1>
      <SignInForm />
      <p className="text-center">Create a new account? <Link to="/signup" className="hover:underline"><b>Sign up</b></Link></p>
    </div>
  );
};

export default SignInWidget;