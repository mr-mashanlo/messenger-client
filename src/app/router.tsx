import { createBrowserRouter } from 'react-router-dom';

import { signInPageRoute, signUpPageRoute } from '@/pages/auth';
import { homePageRoute } from '@/pages/home';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { AuthLayout } = await import( '@/app/layouts/auth' );
          return { Component: AuthLayout };
        },
        children: [ signInPageRoute, signUpPageRoute ]
      },
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/layouts/main' );
          return { Component: MainLayout };
        },
        children: [ homePageRoute ]
      }
    ]
  }
] );

export default router;