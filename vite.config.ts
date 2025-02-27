import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lance28-beep.github.io/Highway-motors/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
