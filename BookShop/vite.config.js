import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ip_cours',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }

})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/ip_cours/'
//     : '/',
    
// }
// vite.config.js
const vuePlugin = require('@vitejs/plugin-vue')

module.exports = {
  plugins: [
    vuePlugin()
  ]
}