// @ts-expect-error path
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  // @ts-expect-error dirname
  resolve: { alias: { '@': path.resolve( __dirname, './src/' ) } }
} );
