import { defineCliConfig } from 'sanity/cli'
import { loadEnv } from 'vite'

// Load environment variables from parent directory
const env = loadEnv('', '../', '')

export default defineCliConfig({
  api: {
    projectId: env.SANITY_PROJECT_ID || 'your-project-id-here',
    dataset: env.SANITY_DATASET || 'your-dataset-name'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
