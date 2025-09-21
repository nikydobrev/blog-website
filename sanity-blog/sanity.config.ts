import { loadEnv } from 'vite'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'

// Load environment variables from parent directory
const env = loadEnv('', '../', '')

export default defineConfig({
  name: 'default',
  title: 'Blog Post',

  projectId: env.SANITY_PROJECT_ID || 'your-project-id-here',
  dataset: env.SANITY_DATASET || 'your-dataset-name',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
