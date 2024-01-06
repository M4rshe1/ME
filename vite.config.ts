import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['markdown-to-jsx'] // Add any necessary dependencies
  },
  assetsInclude: ['**/*.md'], // Ensure Markdown files are included
})
