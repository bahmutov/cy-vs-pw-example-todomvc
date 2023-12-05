// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/products.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    await page.goto('/')
  })

  test('shows the items with css class', async ({ page }) => {
    const todos = page.locator('.todo-list li')

    // from the list of items get the list of titles
    // and the list of CSS classes each item element should have
    // completed? "todo" + "completed"
    // incomplete? just "todo"

    // confirm the todo items have the titles
    // and the class names
  })
})
