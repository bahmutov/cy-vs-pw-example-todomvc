// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    // https://playwright.dev/docs/clock
    await page.clock.install()

    const loadTodos1 = page.waitForRequest('/todos')
    await page.goto('/')
    await loadTodos1

    const loadTodos2 = page.waitForRequest('/todos')
    await page.clock.runFor(61_000)
    await loadTodos2

    const loadTodos3 = page.waitForRequest('/todos')
    await page.clock.runFor(61_000)
    await loadTodos3
  })
})
