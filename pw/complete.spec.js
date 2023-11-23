// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('Complete todos', () => {
  test.beforeEach(async ({ request }) => {
    request.post('/reset', { data: { todos: items } })
  })

  test('completes a todo', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    const todoLabels = todos.locator('label')
    const count = page.locator('[data-cy="remaining-count"]')

    await page.goto('/')

    // confirm the item labels
    const labels = items.map((t) => t.title)
    await expect(todoLabels).toHaveText(labels)
    // confirm the N todos remaining is shown
    await expect(count).toHaveText(String(items.length))

    // complete the first item by clicking its toggle element
    await todos.first().locator('.toggle').click()
    // the first item should have class "completed"
    await expect(todos.first()).toHaveClass(/completed/)
    // confirm the 2nd and the 3rd items do not have class "completed"
    await expect(todos.nth(1)).not.toHaveClass(/completed/)
    await expect(todos.nth(2)).not.toHaveClass(/completed/)
    // Bonus: can you confirm classes for all 3 elements at once
    await expect(todos).toHaveClass(['todo completed', 'todo', 'todo'])
    // confirm there are N-1 remaining items
    await expect(count).toHaveText(String(items.length - 1))
    // and that we can clear the completed items button appears
    await expect(
      page.getByRole('button', { name: 'Clear completed' }),
    ).toBeVisible()
  })
})
