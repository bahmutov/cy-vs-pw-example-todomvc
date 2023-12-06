// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('shows a loader', async ({ page }) => {
    const loading = new Promise(async (resolve) => {
      await page.route('/todos', (route) => {
        setTimeout(() => {
          route.continue()
          resolve(true)
        }, 2000)
      })
    })
    await page.goto('/')
    await loading
    await page.locator('.loaded').waitFor({ timeout: 100 })
  })
})
