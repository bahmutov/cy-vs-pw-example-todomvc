// @ts-check
const { test, expect } = require('@playwright/test')

// use Sinonjs to fake timers in the application's window
// see https://github.com/microsoft/playwright/issues/6347
// and https://sinonjs.org/releases/latest/fake-timers/
test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    // inject Sinonjs library from node_modules "sinon"
    // before any of the application's scripts run
    await page.addInitScript({
      path: './node_modules/sinon/pkg/sinon.js',
    })
    // wrap all "window" timers in fake timers
    // and attach the Sinon timers object to the "window" object
    await page.addInitScript(() => {
      window.__clock = sinon.useFakeTimers()
    })

    // a little utility function used to advance the fake timers
    // in the application's "window" objects using Sinonjs "tick(ms)"
    const tick = (ms) =>
      page.evaluate((ms) => {
        window.__clock.tick(ms)
      }, ms)

    // spy on the "/todos" network request
    const loadTodos1 = page.waitForRequest('/todos')
    await page.goto('/')
    // confirm the application fetches the "/todos" endpoint
    await loadTodos1

    // spy on the "/todos" network request again
    const loadTodos2 = page.waitForRequest('/todos')
    // advance the fake timers by 61 seconds
    tick(61_000)
    // and confirm the application fetches the "/todos" endpoint again
    await loadTodos2

    // spy on the "/todos" network request again
    // advance the fake timers by 61 seconds
    // and confirm the application fetches the "/todos" endpoint 3rd time
    const loadTodos3 = page.waitForRequest('/todos')
    tick(61_000)
    await loadTodos3
  })
})
