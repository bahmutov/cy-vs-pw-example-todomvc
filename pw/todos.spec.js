// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('inserts the first todo', async ({ page }) => {
    const todos = page.locator('.todo-list li')

    const title = 'The first one!'
    // spy on the "GET /todos" network call
    // once the response arrives
    // confirm it is an array
    // and insert a new object at the first position
    // title, completed=false, id="1234"
    // https://playwright.dev/docs/mock
    await page.route('/todos', async (route) => {
      const response = await route.fetch()
      const json = await response.json()
      json.unshift({ title, completed: false, id: '1234' })
      // Fulfill using the original response, while patching the response body
      // with the given JSON object.
      await route.fulfill({ response, json })
    })

    await page.goto('/')

    // confirm there is at least one todo
    // and the first todo element
    // has the title text
    // and has the class "todo"
    // and does not have class "completed"
    await expect(async () => {
      const n = await todos.count()
      expect(n).toBeGreaterThan(0)
    }).toPass()
    await expect(todos.first()).toHaveText(title)
    await expect(todos.first()).toHaveClass(/todo/)
    await expect(todos.first()).not.toHaveClass(/completed/)
  })
})
