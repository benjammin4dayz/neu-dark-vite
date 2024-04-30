import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(
      // use Dark jsx factory
      { jsxImportSource: '@dark-engine/core' }
    ),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // required to resolve react/jsx-runtime in react plugin
      react: '@dark-engine/core',
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
