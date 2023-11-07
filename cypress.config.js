const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    video: true,
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
