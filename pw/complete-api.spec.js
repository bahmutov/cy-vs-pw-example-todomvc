// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Complete todos', () => {
  test.beforeEach(async ({ request }) => {
    const todos = [
      {
        title: 'Write code',
        completed: false,
        id: '9719548620',
      },
      {
        title: 'Write tests',
        completed: false,
        id: '7560280342',
      },
      {
        title: 'Make tests pass',
        completed: false,
        id: '8607162111',
      },
    ]
    request.post('/reset', { data: { todos } })
  })

  test('completes a todo', async ({ page }) => {
    const todos = page.locator('.todo-list li')
    await page.goto('/')

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
