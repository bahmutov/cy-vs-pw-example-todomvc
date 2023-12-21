// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('fetches todos every 60 seconds', async ({ page }) => {
    await page.addInitScript({
      path: './node_modules/sinon/pkg/sinon.js',
    })
    await page.addInitScript(() => {
      window.__clock = sinon.useFakeTimers()
    })

    const tick = (ms) =>
      page.evaluate((ms) => {
        window.__clock.tick(ms)
      }, ms)

    const loadTodos1 = page.waitForRequest('/todos')
    await page.goto('/')
    await loadTodos1

    const loadTodos2 = page.waitForRequest('/todos')
    tick(61_000)
    await loadTodos2

    const loadTodos3 = page.waitForRequest('/todos')
    tick(61_000)
    await loadTodos3
  })
})
