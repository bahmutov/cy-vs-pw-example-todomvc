// @ts-check
const { test, expect } = require('@playwright/test')

// start each test with zero todos
test.beforeEach(async ({ request }) => {
  request.post('/reset', { data: { todos: [] } })
})

// Tip: read the "Actions" Guide before implementing this test
// https://playwright.dev/docs/input
test('adding todos', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?')
  const todos = page.locator('.todo-list li label')

  // visit the application
  await page.goto('/')
  // wait for the body.loaded element to be visible
  await expect(page.locator('body.loaded')).toBeVisible()
  // there should be zero todo items
  await expect(todos).toHaveCount(0)
  // find the input element using the placeholder text
  // and type "Write code" followed by "Enter" press

  await input.fill('Write code')
  await input.press('Enter')

  // there should be one todo item on the page
  // the todo item label should have the entered text
  await expect(todos).toHaveText(['Write code'])
})
