import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8000',
  },
  webServer: {
  command: 'uvicorn mock_server.app:app --port 8000',
  port: 8000,
  reuseExistingServer: !process.env.CI,
},
});