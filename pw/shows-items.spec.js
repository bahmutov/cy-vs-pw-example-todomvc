// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App', () => {
  test.beforeEach(async ({ request }) => {
    // confirm there are several items
    // and some are completed and some are not

    request.post('/reset', { data: { todos: items } })
  })

  test('shows items', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    const count = page.locator('[data-cy="remaining-count"]')

    await page.goto('/')

    // shows N items

    // go through the items and confirm each is rendered correctly
    // - label text
    // - completed or not

    // confirm the remaining items count is correct
  })
})
