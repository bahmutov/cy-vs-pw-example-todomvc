// @ts-check
const { test } = require('@playwright/test')

test('GET /todos call', async ({ page }) => {
  const getTodosPromise = page.waitForResponse('**/todos')
  await page.goto('/')
  // confirm the network call was made
  await getTodosPromise
})
