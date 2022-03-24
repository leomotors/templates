/** @type {import("@playwright/test").PlaywrightTestConfig} */
export default {
  webServer: {
    command: "npm run build && npm run preview",
    port: 3000,
  },
};
