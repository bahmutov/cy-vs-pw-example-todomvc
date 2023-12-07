// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('logs a server error', async ({ page }) => {
    // stub the "GET /todos" route and return
    // an object with status code 500
    // and the body "server error"
    // spy on the "GET /todos" resource

    // set up an array to collect all text the app
    // prints using "console.error()" method
    // https://playwright.dev/docs/api/class-consolemessage
    const errorMessages = []

    // visit the page
    // and wait for the "GET /todos" call

    // retry checking the error messages array
    // to find the message "server error"
    // that the application should print when it receives
    // an error response from the backend
  })
})
