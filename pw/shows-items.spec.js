// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App', () => {
  test.beforeEach(async ({ request }) => {
    // confirm there are several items
    // and some are completed and some are not
    expect(items.length, 'number of items').toBeGreaterThan(0)
    expect(
      items.some((item) => item.completed),
      'has completed items',
    ).toBeTruthy()
    expect(
      items.some((item) => !item.completed),
      'has incomplete items',
    ).toBeTruthy()
    request.post('/reset', { data: { todos: items } })
  })

  test('shows items', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    const count = page.locator('[data-cy="remaining-count"]')

    await page.goto('/')

    // shows N items
    await expect(todos).toHaveCount(items.length)
    // go through the items and confirm each is rendered correctly
    // - label text
    // - completed or not
    for (const [k, item] of items.entries()) {
      const itemLocator = todos.nth(k)
      await expect(itemLocator.locator('label')).toHaveText(item.title)
      if (item.completed) {
        await expect(itemLocator).toHaveClass(/completed/)
      } else {
        await expect(itemLocator).not.toHaveClass(/completed/)
      }
    }

    // confirm the remaining items count is correct
    const n = items.filter((item) => !item.completed).length
    await expect(count).toHaveText(String(n))
  })
})
