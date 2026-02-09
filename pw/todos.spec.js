// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Random todos', () => {
  test.use({ viewport: { width: 1280, height: 1000 } })

  /** @type number */
  let numberOfTodos

  test.beforeEach(async ({ request }) => {
    // Create a random number of todos (0-10)
    // Create todos with unique IDs and titles
    // Reset the app state with the created todos
  })

  test('shows the expected number of todos', async ({ page }) => {
    await page.goto('/')

    // Confirm the app shows the expected number of todos
    const todoItems = page.locator('.todo-list li')
  })
})
