// @ts-check
const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ request }) => {
  await request.post('/reset', { data: { todos: [] } })
})

test('adding todos', async ({ page }) => {
  // avoid duplicator code by reusing the same locator objects
  await page.goto('/')
  await expect(page.locator('body.loaded')).toBeVisible()
  await expect(page.locator('.todo-list li')).toHaveCount(0)
  await page.getByPlaceholder('What needs to be done?').fill('Write code')
  await page.getByPlaceholder('What needs to be done?').press('Enter')
  await expect(page.locator('.todo-list li')).toHaveCount(1)
  await expect(page.locator('.todo-list li label')).toHaveText('Write code')
})
