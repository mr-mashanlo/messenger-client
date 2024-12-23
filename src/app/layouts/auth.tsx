import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: FC = () => {
  return (
    <div className="min-h-screen px-5 flex items-center justify-center">
      <div className="w-full sm:w-96 flex flex-col gap-7">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;