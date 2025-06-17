const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //Setting baseUrl in config to make tests shorter, cleaner, and easier to manage across environments.
    baseUrl: "https://the-internet.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
