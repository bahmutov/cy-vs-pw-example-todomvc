// @ts-check
import { test, expect } from '@playwright/test'
import todos from '../fixtures/3-todos.json'

expect(todos.length, 'have a few todos').toBeGreaterThan(2)

test.describe('TodoMVC', () => {
  test.beforeEach(async ({ request }) => {
    await request.post('/reset', { data: { todos } })
  })

  test('completes a todo', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.todo-list li')).toHaveCount(todos.length)
  })
})
