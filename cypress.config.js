const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 745,
  viewportWidth: 1045,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ui-automation-camp.vercel.app",
    specPattern: "cypress/e2e/test/**/*.cy.{js,jsx,tx,tsx}",
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: false,
        json: true
    },
  },
});
