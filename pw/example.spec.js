// @ts-check
const { test, expect } = require('@playwright/test')

// commands operate with respect to the "baseUrl"
// defined in the playwright.config.js file

test.beforeEach(async ({ request }) => {
  request.post('/reset', { data: { todos: [] } })
})

test('has title', async ({ page }, testInfo) => {
  console.log('running test "%s"', testInfo.titlePath.join('/'))

  await page.goto('/')
  await expect(page.locator('body')).toHaveClass('loaded')
  await expect(page.locator('.todo-list li')).toHaveCount(0)
})
