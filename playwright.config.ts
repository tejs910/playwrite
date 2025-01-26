import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Directory for test files
  timeout: 30 * 1000, // Timeout per test in milliseconds
  retries: 1, // Retry failed tests once
  use: {
    baseURL: "http://localhost:3000", // Your Next.js app's dev server
    headless: true, // Run tests in headless mode by default
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // Timeout for actions like clicks
    trace: "on-first-retry", // Capture traces for debugging on retry
  },
});
