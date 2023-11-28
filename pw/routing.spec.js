// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App routing', () => {
  test.beforeEach(async ({ request }) => {
    request.post('/reset', { data: { todos: items } })
  })

  test('shows all, completed, or incomplete todos', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    const all = page.getByRole('link', { name: 'All' })
    const active = page.getByRole('link', { name: 'Active' })
    const completed = page.getByRole('link', { name: 'Completed' })

    // the application starts with 3 items
    await page.goto('/')
    await expect(todos).toHaveCount(3)
    // by default, the filter "All" is selected and nothing else
    // click on the "Active" link and confirm the URL changes its hash
    // part to "#/active"
    await expect(all).toHaveClass('selected')
    await expect(active).not.toHaveClass('selected')
    await expect(completed).not.toHaveClass('selected')
    await active.click()
    await expect(page).toHaveURL(/\#\/active/)

    // there should be 2 todo items shown
    await expect(todos).toHaveCount(2)
    // the filter "Active" is selected instead of "All" and nothing else
    // click on the "Completed" link and confirm the URL hash changes
    await expect(all).not.toHaveClass('selected')
    await expect(active).toHaveClass('selected')
    await expect(completed).not.toHaveClass('selected')
    await completed.click()
    await expect(page).toHaveURL(/\#\/completed/)

    // there should be just one item shown
    await expect(todos).toHaveCount(1)
    // the filter "Completed" is selected, and nothing else
    // click on the "All" link and confirm the URL hash changes
    await expect(all).not.toHaveClass('selected')
    await expect(active).not.toHaveClass('selected')
    await expect(completed).toHaveClass('selected')
    await all.click()
    await expect(page).toHaveURL(/\#\/all/)
    // and we are back to 3 items
    await expect(todos).toHaveCount(3)
  })
})
