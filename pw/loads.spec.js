// @ts-check
const { test } = require('@playwright/test')

test('loads', async ({ page }) => {
  await page.goto('/')
  // confirm the app has loaded when the app sets
  // the "loaded" class on the body element
  await page.locator('body.loaded').waitFor()
})
