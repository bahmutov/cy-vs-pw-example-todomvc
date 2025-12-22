// @ts-check
const { test } = require('@playwright/test')

test('waiting for the button to be enabled', async ({ page }) => {
  await page.goto('/')
  await page.locator('#click').click()
})
