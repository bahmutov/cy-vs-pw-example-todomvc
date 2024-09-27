// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    // install synthetic clock using clock.install
    // https://playwright.dev/docs/clock

    // spy on the "/todos" network request
    await page.goto('/')
    // confirm the application fetches the "/todos" endpoint

    // spy on the "/todos" network request again
    // advance the fake timers by 61 seconds
    // using clock.runFor
    // and confirm the application fetches the "/todos" endpoint again

    // spy on the "/todos" network request again
    // advance the fake timers by 61 seconds
    // and confirm the application fetches the "/todos" endpoint 3rd time
  })
})
