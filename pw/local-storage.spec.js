// @ts-check
const { test, expect } = require('@playwright/test')

// load the two todos from the "./fixtures/two-items.json" file
const todos = require('../fixtures/two-items.json')

test.describe('App', () => {
  test('stores todos in the local storage', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { todos })
    // visit the home page
    await page.goto('/')
    // there should be two items on the page
    await expect(page.locator('.todo')).toHaveCount(2)
    // the local storage should have two items
    // under the property "todos"
    // get the local storage item "todos" and parse it
    // and return back to the test
    // Tip: use page.evaluate to run code in the browser
    const items = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('todos'))
    })
    expect(items).toHaveLength(2)
  })
})
