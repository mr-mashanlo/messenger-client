import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SocketProvider } from '@/shared/context';
import router from './router';
import './index.sass';

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>
);