// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('TodoMVC', () => {
  // start each test with zero todos
  test.beforeEach(async ({ request }) => {
    await request.post('/reset', { data: { todos: [] } })
  })

  test('starts with zero items', async ({ page }) => {
    await page.goto('/')
    await page.locator('body.loaded').waitFor()
    // confirm there are zero todo items
    // using CSS selector for todo items
    await expect(page.locator('.todo')).toHaveCount(0)
  })
})
