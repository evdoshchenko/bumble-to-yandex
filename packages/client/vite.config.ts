import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import * as path from 'path'
dotenv.config()

export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 5000,
    __API_ENDPOINT__: JSON.stringify(process.env.API_ENDPOINT),
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') },
    ],
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
