// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    // visit the base url
    await page.goto('/')
  })

  test('shows more than 2 items at the start', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')

    // the application starts several items
    // assume that we don't know the exact number
    // but we expect more than 2 items
    await expect(async () => {
      const count = await todos.count()
      expect(count).toBeGreaterThan(2)
    }).toPass()
  })
})
