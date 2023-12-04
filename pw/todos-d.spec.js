// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/products.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    await page.goto('/')
  })

  test('shows items sorted by price - D', async ({ page }) => {
    const todos = page.locator('.todo-list li')

    await expect(async () => {
      const titles = await todos.allTextContents()
      const matches = titles.map((s) => s.match(/\$(?<price>\d+)/))
      const strings = matches.map((m) => m?.groups?.price)
      // @ts-ignore
      const prices = strings.map(parseFloat)
      expect(prices).toEqual([1, 4, 59])
    }).toPass()
  })
})
