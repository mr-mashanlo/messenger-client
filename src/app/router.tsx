import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@/shared/layout';
import { NotRequestAuth, RequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';

import { signinAction, signupAction } from '@/features/auth/actions';
import { fetchUsers } from '@/features/user/loaders';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <RequestAuth><MainLayout /></RequestAuth>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: fetchUsers
      }
    ]
  },

  {
    element: <NotRequestAuth><AuthLayout /></NotRequestAuth>,
    children: [
      {
        path: '/signin',
        element: <SigninPage />,
        action: signinAction
      },
      {
        path: '/signup',
        element: <SignupPage />,
        action: signupAction
      }
    ]
  }
] );

export default router;