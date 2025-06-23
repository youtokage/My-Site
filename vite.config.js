// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills({
      protocolImports: true, // node:fs 形式も許可
      globals: { Buffer: true } // Buffer だけでも可
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'buffer',        // Rollup 用
    }
  },
  // GitHub Pagesに対応するための設定
  base: process.env.NODE_ENV === 'production' ? '/My-Site/' : '/',
  
  // [Fix] ReferenceError: Buffer is not defined
  optimizeDeps: {
      esbuildOptions: {
          // Node.js global to browser globalThis
          define: {
              global: 'globalThis'
          },
          // Enable esbuild polyfill plugins
          plugins: [
              NodeGlobalsPolyfillPlugin({
                  buffer: true
              })
          ]
      }
  }
})