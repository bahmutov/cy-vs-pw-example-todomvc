// @ts-check
import { test, expect } from '@playwright/test'
import todos from '../fixtures/3-todos.json'

expect(todos.length, 'have a few todos').toBeGreaterThan(2)

test.describe('TodoMVC', () => {
  test.beforeEach(async ({ request }) => {
    await request.post('/reset', { data: { todos } })
  })

  test('delete a todo', async ({ page }) => {
    const items = page.locator('.todo-list li')
    await page.goto('/')
    await expect(items).toHaveCount(todos.length)

    await items.first().hover()
    await items.first().locator('.destroy').click()
    await expect(items).toHaveCount(todos.length - 1)
  })
})
