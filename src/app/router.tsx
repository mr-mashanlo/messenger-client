import { createBrowserRouter } from 'react-router-dom';

import { signInPageRoute, signUpPageRoute } from '@/pages/auth';
import { homePageRoute } from '@/pages/home';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { AuthLayout } = await import( '@/app/authLayout' );
          return { Component: AuthLayout };
        },
        children: [ signInPageRoute, signUpPageRoute ]
      },
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/mainLayout' );
          return { Component: MainLayout };
        },
        children: [ homePageRoute ]
      }
    ]
  }
] );

export default router;