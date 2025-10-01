import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // your frontend port
    proxy: {
      '/api': {
        target: 'http://localhost:8800', // backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
