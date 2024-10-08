import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import compression from 'vite-plugin-compression2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'), // Set your preferred alias (e.g., '@' for 'src')
    },
  },
  base: '/components/',

  // proxy: {
  //   '/api': {
  //     target: 'https://ssl.geoplugin.net',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // }

});




