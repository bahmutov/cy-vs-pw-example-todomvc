// @ts-check
const { test, expect } = require('@playwright/test')

test('HTML language attribute is set to English', async ({ page }) => {
  await page.goto('/')
  // confirm the HTML element has lang="en"
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
})
