import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { useAuthStore } from '@/entities/auth/model';

export const settingsPageRoute: RouteObject = {
  path: 'settings',
  lazy: async () => {
    const { SettingsPage } = await import( './settingsPage' );
    return { Component: SettingsPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return useAuthStore.getState().sub ? args : redirect( '/signin' ) ;
  }
};