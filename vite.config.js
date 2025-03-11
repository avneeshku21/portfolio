import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Change from '/portfolio/' to '/' if necessary
  plugins: [react()]
})
