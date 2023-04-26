import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "/src/../node_modules/wave-ui/src/wave-ui/scss/_variables.scss";'
      }
    }
  },
  plugins: [vue()]
})
