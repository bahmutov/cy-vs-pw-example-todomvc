// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('shows a loader', async ({ page }) => {
    await page.goto('/')
    await page.locator('.loaded').waitFor({ timeout: 100 })
  })
})
