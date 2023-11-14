// @ts-check
const { test, expect } = require('@playwright/test')

// start each test with zero todos
test.beforeEach(async ({ request }) => {
  request.post('/reset', { data: { todos: [] } })
})

test('adding todos', async ({ page }) => {
  // avoid duplicator code by reusing the same locator objects
  const input = page.getByPlaceholder('What needs to be done?')
  const todos = page.locator('.todo-list li label')

  await page.goto('/')
  await page.locator('body.loaded').waitFor()
  await expect(todos).toHaveCount(0)
  await input.fill('Write code')
  await input.press('Enter')
  await expect(todos).toHaveText(['Write code'])
})
