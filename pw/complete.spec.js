// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Complete todos', () => {
  test.beforeEach(async ({ request }) => {
    await request.post('/reset', { data: { todos: [] } })
  })

  test('completes a todo', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?')
    const todos = page.locator('.todo-list li')

    await page.goto('/')
    await page.locator('body.loaded').waitFor()

    await input.fill('Write code')
    await input.press('Enter')
    await input.fill('Write tests')
    await input.press('Enter')
    await input.fill('Make tests pass')
    await input.press('Enter')

    // 3 incomplete todos
    await expect(todos).toHaveCount(3)
    await expect(todos).toHaveClass(['todo', 'todo', 'todo'])
    // complete the middle todo
    await todos.nth(1).locator('.toggle').click()
    // confirm the middle todo is completed
    // while the other todos are not
    await expect(todos).toHaveClass(['todo', 'todo completed', 'todo'])
  })
})
