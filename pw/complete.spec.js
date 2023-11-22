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
    await input.fill('Write code')
    await input.press('Enter')
    await input.fill('Write tests')
    await input.press('Enter')
    await input.fill('Make tests pass')
    await input.press('Enter')

    // confirm the item labels
    await expect(todoLabels).toHaveText([
      'Write code',
      'Write tests',
      'Make tests pass',
    ])
    // confirm the "3" todos remaining is shown
    await expect(count).toHaveText('3')

    // complete the first item by clicking its toggle element
    await todos.first().locator('.toggle').click()
    // the first item should have class "completed"
    await expect(todos.first()).toHaveClass(/completed/)
    // confirm the 2nd and the 3rd items do not have class "completed"
    await expect(todos.nth(1)).not.toHaveClass(/completed/)
    await expect(todos.nth(2)).not.toHaveClass(/completed/)
    // Bonus: can you confirm classes for all 3 elements at once
    await expect(todos).toHaveClass(['todo completed', 'todo', 'todo'])
    // confirm there are 2 remaining items
    await expect(count).toHaveText('2')
    // and that we can clear the completed items button appears
    await expect(
      page.getByRole('button', { name: 'Clear completed' }),
    ).toBeVisible()
  })
})
