import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a chunk for all node_modules
          }
          if (id.includes('src/components/canvas')) {
            return 'canvas'; // Create a separate chunk for canvas components
          }
        }
      }
    }
  }
});
