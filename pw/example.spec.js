// @ts-check
const { test, expect } = require('@playwright/test')

test('has the input box', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const input = page.getByPlaceholder('What needs to be done?')
  console.log(input)
  await expect(input).toBeVisible()
})
