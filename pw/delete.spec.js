// @ts-check
import { test, expect } from '@playwright/test'
import todos from '../fixtures/3-todos.json'

test.describe('TodoMVC', () => {
  test.beforeEach(async ({ request }) => {
    await request.post('/reset', { data: { todos } })
  })

  test('delete a todo', async ({ page }) => {
    const items = page.locator('.todo-list li')
    await page.goto('/')
    // for clarity, use explicit list of strings
    await expect(items).toHaveText([
      'Write code',
      'Write tests',
      'Make tests pass',
    ])

    await items.first().hover()
    await items.first().locator('.destroy').click()
    // the first item is gone
    await expect(items).toHaveText(['Write tests', 'Make tests pass'])
  })
})
