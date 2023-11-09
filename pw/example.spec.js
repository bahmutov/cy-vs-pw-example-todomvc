// @ts-check
const { test, expect } = require('@playwright/test')

// start each test with zero todos
test.beforeEach(async ({ request }) => {
  request.post('/reset', { data: { todos: [] } })
})

// Tip: read the "Actions" Guide before implementing this test
// https://playwright.dev/docs/input
test('adding todos', async ({ page }) => {
  // visit the application
  await page.goto('/')
  // wait for the body.loaded element to be visible
  await expect(page.locator('body.loaded')).toBeVisible()
  // there should be zero todo items
  await expect(page.locator('.todo-list li')).toHaveCount(0)
  // find the input element using the placeholder text
  // and type "Write code" followed by "Enter" press
  await page.getByPlaceholder('What needs to be done?').fill('Write code')
  await page.getByPlaceholder('What needs to be done?').press('Enter')
  // there should be one todo item on the page
  await expect(page.locator('.todo-list li')).toHaveCount(1)
  // the todo item label should have the entered text
  await expect(page.locator('.todo-list li label')).toHaveText('Write code')
})
