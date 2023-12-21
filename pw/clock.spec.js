// @ts-check
const { test, expect } = require('@playwright/test')

// use Sinonjs to fake timers in the application's window
// see https://github.com/microsoft/playwright/issues/6347
// and https://sinonjs.org/releases/latest/fake-timers/
test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    // inject Sinonjs library from node_modules "sinon"
    // before any of the application's scripts run

    // wrap all "window" timers in fake timers
    // and attach the Sinon timers object to the "window" object

    // a little utility function used to advance the fake timers
    // in the application's "window" objects using Sinonjs "tick(ms)"
    const tick = (ms) =>
      page.evaluate((ms) => {
        window.__clock.tick(ms)
      }, ms)

    // spy on the "/todos" network request
    await page.goto('/')
    // confirm the application fetches the "/todos" endpoint

    // spy on the "/todos" network request again
    // advance the fake timers by 61 seconds
    // and confirm the application fetches the "/todos" endpoint again

    // spy on the "/todos" network request again
    // advance the fake timers by 61 seconds
    // and confirm the application fetches the "/todos" endpoint 3rd time
  })
})
