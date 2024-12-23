import { createBrowserRouter } from 'react-router-dom';

import { signInPageRoute, signUpPageRoute } from '@/pages/auth';
import { homePageRoute } from '@/pages/home';
import { settingsPageRoute } from '@/pages/settings';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        lazy: async () => {
          const { AuthLayout } = await import( '@/app/layouts' );
          return { Component: AuthLayout };
        },
        children: [ signInPageRoute, signUpPageRoute ]
      },
      {
        lazy: async () => {
          const { SettingsLayout } = await import( '@/app/layouts' );
          return { Component: SettingsLayout };
        },
        children: [ settingsPageRoute ]
      },
      {
        lazy: async () => {
          const { MainLayout } = await import( '@/app/layouts' );
          return { Component: MainLayout };
        },
        children: [ homePageRoute ]
      }
    ]
  }
] );

export default router;