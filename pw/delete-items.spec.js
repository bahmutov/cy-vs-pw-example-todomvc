// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App', () => {
  test.beforeEach(async ({ request }) => {
    request.post('/reset', { data: { todos: items } })
  })

  test('deletes items', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    await page.goto('/')
    await expect(todos).toHaveCount(3)

    // delete one completed item (the middle one)
    // confirm the remaining two items are still there
    // delete one incomplete item (the first one)
    // confirm the one remaining item
  })
})
