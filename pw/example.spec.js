// @ts-check
const { test, expect } = require('@playwright/test')

// before each test clear all todos
// by making a POST request to "/reset" endpoint
// and pass an object { todos: [] }
// which should clear all existing todos
// see:
// https://playwright.dev/docs/api/class-test
// https://playwright.dev/docs/api-testing
test.beforeEach(async ({ request }) => {
  await request.post('http://localhost:3000/reset', { data: { todos: [] } })
})

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  // confirm the page has finished loading todos
  // and the body element has CSS class "loaded"
  // https://playwright.dev/docs/api/class-locatorassertions
  await expect(page.locator('body')).toHaveClass('loaded')

  // confirm there are 0 todo items on the page
  // use the CSS selector ".todo-list li"
  // https://playwright.dev/docs/locators
  // and the count assertion
  // https://playwright.dev/docs/api/class-locatorassertions
  await expect(page.locator('.todo-list li')).toHaveCount(0)
})
