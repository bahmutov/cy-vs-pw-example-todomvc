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

    // confirm there are several items
    // and parse each item's title to get the prices
    // and confirm they are sorted in the ascending order
    await expect(async () => {
      const titles = await todos.allTextContents()
      const matches = titles.map((s) => s.match(/\$(?<price>\d+)/))
      const strings = matches.map((m) => m?.groups?.price)
      // @ts-ignore
      const prices = strings.map(parseFloat)
      const sorted = structuredClone(prices).sort()
      expect(sorted, 'sorted from min to max').toEqual(prices)
    }).toPass()
  })
})
