import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process'


function getLastCommitDate() {
  try {
    return execSync('git log -1 --format=%cI').toString().trim() // ISO string
  } catch {
    return new Date().toISOString()
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works when hosted at
  // https://<username>.github.io/<repo-name>/ (any repo name, no config needed).
  base: "./",
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastCommitDate()),
  },
})
