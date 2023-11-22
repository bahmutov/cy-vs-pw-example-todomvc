// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Complete todos', () => {
  test.beforeEach(async ({ request }) => {
    request.post('/reset', { data: { todos: [] } })
  })

  test('completes a todo', async ({ page }) => {
    // common locators
    const input = page.getByPlaceholder('What needs to be done?')
    const todos = page.locator('.todo-list li')
    const todoLabels = todos.locator('label')
    const count = page.locator('[data-cy="remaining-count"]')

    await page.goto('/')
    await page.locator('body.loaded').waitFor()

    // enter three todos
    // "Write code", "Write tests", "Make tests pass"
    // confirm the item labels
    // confirm the "3" todos remaining is shown
    // complete the first item by clicking its toggle element
    // the first item should have class "completed"
    // confirm the 2nd and the 3rd items do not have class "completed"
    // Bonus: can you confirm classes for all 3 elements at once
    // confirm there are 2 remaining items
    // and that we can clear the completed items button appears
  })
})
