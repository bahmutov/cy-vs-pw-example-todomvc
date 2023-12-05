// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/products.json')

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    // set up a route handler for "/todos" endpoint
    // when the route matches, fulfill it using
    // the loaded items array
    // Tip: make sure to set the content type header
    //
    // set up a promise that waits for the response
    // to the network call "/todos"
    // https://playwright.dev/docs/network
    await page.goto('/')
  })

  test('shows the items with css class', async ({ page }) => {
    const todos = page.locator('.todo-list li')
    // wait for the intercepted network call "load"

    // confirm the the number of shown todos is 3
    // and that todos show up within 100ms of the load network call
    await expect(todos).toHaveCount(3)
  })
})
