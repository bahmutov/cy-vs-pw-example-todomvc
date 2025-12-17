// @ts-check
const { test, expect } = require('@playwright/test')

import todos from '../fixtures/3-todos.json'

test('stub GET /todos call', async ({ page }) => {
  await page.route('/todos', (route) =>
    route.fulfill({
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos),
    }),
  )

  const getTodosPromise = page.waitForResponse('**/todos')
  await page.goto('/')
  // confirm the application made the GET /todos request
  await getTodosPromise
  // confirm the application is showing the stubbed todos
  await expect(page.locator('.todo-list li')).toHaveText(
    todos.map((t) => t.title),
  )
})
