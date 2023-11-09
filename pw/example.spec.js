// @ts-check
const { test, expect } = require('@playwright/test')

// start each test with zero todos
test.beforeEach(async ({ request }) => {
  request.post('/reset', { data: { todos: [] } })
})

// Tip: read the "Actions" Guide before implementing this test
// https://playwright.dev/docs/input
// and the "Locators" guide
// https://playwright.dev/docs/locators
test('adding todos', async ({ page }) => {
  // visit the application
  // wait for the body.loaded element to be visible
  // there should be zero todo items
  // find the input element using the placeholder text
  // and type "Write code" followed by "Enter" press
  // there should be one todo item on the page
  // the todo item label should have the entered text
})
