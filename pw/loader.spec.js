// @ts-check
const { test } = require('@playwright/test')

test.describe('App', () => {
  test('shows a loader', async ({ page }) => {
    // intercept the "/todos" call
    // and delay it by 2 seconds before
    // allowing it to continue to the server
    await page.route('/todos', (route) => {
      setTimeout(() => {
        route.continue()
      }, 2000)
    })
    // spy on the "/todos" network call
    const loading = page.waitForResponse('/todos')
    // visit the page after setting up the network spies
    await page.goto('/')
    // confirm the loading element is visible
    await page.locator('.loading').waitFor({ state: 'visible' })
    // confirm the loading element is hidden
    await page.locator('.loading').waitFor({ state: 'hidden' })
    // confirm the "/todos" call has happened
    await loading
    // and the "class=loaded" element is visible quickly after
    await page.locator('.loaded').waitFor({ timeout: 100 })
  })
})
