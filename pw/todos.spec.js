// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('prints the load start message', async ({ page }) => {
    const log = []
    // expose function in the application's "window" object
    // called "logCall" which simply pushes its argument
    // into the "log" array
    // Read "Verifying API calls"
    // https://playwright.dev/docs/mock-browser-apis

    // inject the initial script into the application
    // that overwrites the "console.log" method
    // the overwrite should:
    // - call the real "console.log" method
    // - call the "logCall" function to pass the arguments

    // visit the application page

    // confirm the "log" array includes the following arguments
    // ['loadTodos start, delay is %d', 0]
  })
})
