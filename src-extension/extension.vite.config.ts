import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,

    emptyOutDir: false,

    rollupOptions: {
      input: {
        content: path.resolve(__dirname, 'content.ts'),
        'delete-content': path.resolve(__dirname, 'delete-content.ts'),
        'service-worker': path.resolve(__dirname, 'service-worker.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})