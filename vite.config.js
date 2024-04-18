import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('src'), // Set your preferred alias (e.g., '@' for 'src')
    },
  },
  base: '/components/'

});

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Set your preferred alias (e.g., '@' for 'src')
//     },
//   // base: './',
//   base: '/components/'
//   // base: '/components/'  
// })


