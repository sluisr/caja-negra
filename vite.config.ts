import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // RECUERDA CAMBIAR "caja-negra" por el nombre de tu repositorio de GitHub
  base: "/caja-negra/",
})
