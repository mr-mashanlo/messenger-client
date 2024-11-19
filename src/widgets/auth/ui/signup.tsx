import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SignUpForm } from '@/features/auth/ui';

const SignUpWidget: FC = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-bold text-center">Sign up</h1>
      <SignUpForm />
      <p className="text-center">Already have an account? <Link to="/signin" className="hover:underline"><b>Sign in</b></Link></p>
    </div>
  );
};

export default SignUpWidget;