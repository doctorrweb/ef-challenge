require('dotenv').config()
const { defineConfig } = require("cypress")
const dotenvPlugin = require('cypress-dotenv')

module.exports = defineConfig({
  projectId: '2sfwny',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = dotenvPlugin(config)
      return config
    },
  }
})