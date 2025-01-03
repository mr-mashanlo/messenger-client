import { createBrowserRouter } from 'react-router-dom';

import { chatRoute } from '@/pages/chat';
import { homeRoute } from '@/pages/home';
import { signinRoute } from '@/pages/sign-in';
import { signupRoute } from '@/pages/sign-up';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { AuthLayout } = await import( '@/app/layouts' );
          return { Component: AuthLayout };
        },
        children: [ signinRoute, signupRoute ]
      },
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/layouts' );
          return { Component: MainLayout };
        },
        children: [ homeRoute, chatRoute ]
      }
    ]
  }
] );

export default router;