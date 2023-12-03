// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/products.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    // visit the base url
    await page.goto('/')
  })

  test('shows items sorted by price', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')

    await expect(async () => {
      // confirm there are several items
      // and parse each item's title to get the prices
      // and confirm they are sorted in the ascending order
    }).toPass()
  })
})
