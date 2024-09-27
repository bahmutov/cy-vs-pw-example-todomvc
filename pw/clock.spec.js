// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    await page.clock.install()

    // spy on the "/todos" network request
    const loadTodos1 = page.waitForRequest('/todos')
    await page.goto('/')
    // confirm the application fetches the "/todos" endpoint
    await loadTodos1

    // spy on the "/todos" network request again
    const loadTodos2 = page.waitForRequest('/todos')
    // advance the fake timers by 61 seconds
    await page.clock.runFor(61_000)
    // and confirm the application fetches the "/todos" endpoint again
    await loadTodos2

    // spy on the "/todos" network request again
    const loadTodos3 = page.waitForRequest('/todos')
    // advance the fake timers by 61 seconds
    await page.clock.runFor(61_000)
    // and confirm the application fetches the "/todos" endpoint 3rd time
    await loadTodos3
  })
})
