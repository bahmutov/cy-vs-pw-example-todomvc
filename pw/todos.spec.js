// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/products.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    // the application code will run after 6 second delay
    await page.goto('/?appStartDelay=6000')
  })

  test('shows the items with css class', async ({ page }) => {
    const todos = page.locator('.todo-list li')
    // the elements will only appear after 6 seconds
    // can you increase the time for getting the elements
    // and retrying the elements?
    await expect(todos).toHaveCount(3)
  })
})
