import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import compression from 'vite-plugin-compression2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // compression({
    //   algorithm: 'gzip',
    //   ext: '.gz',
    // }),
    // compression({
    //   algorithm: 'brotliCompress',
    //   ext: '.br',
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'), // Set your preferred alias (e.g., '@' for 'src')
    },
  },
  base: '/components/',

  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //         }
  //       }
  //     }
  //   }
  // }

});




