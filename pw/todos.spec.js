// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Random todos', () => {
  test.use({ viewport: { width: 1280, height: 1000 } })

  /** @type number */
  let numberOfTodos

  test.beforeEach(async ({ request }) => {
    // Create a random number of todos (0-10)
    numberOfTodos = Math.floor(Math.random() * 11)
    await test.step(`Creating ${numberOfTodos} random todos`, async () => {})

    // Create todos with unique IDs and titles
    const todos = Array.from({ length: numberOfTodos }, (_, i) => ({
      id: Math.floor(Math.random() * 900000) + 100000,
      title: `Random todo ${i + 1}`,
      completed: false,
    }))

    // Reset the app state with the created todos
    await request.post('/reset', {
      data: { todos },
    })
  })

  test('shows the expected number of todos', async ({ page }) => {
    await page.goto('/')

    // Confirm the app shows the expected number of todos
    const todoItems = page.locator('.todo-list li')
    await expect(todoItems).toHaveCount(numberOfTodos)
  })
})
