// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: [] } })
    await page.goto('/')
    await page.locator('.loaded').waitFor()
  })

  test('confirms the entire sent Todo object', async ({ page }) => {
    // start spying on the network requests to "/todos"

    // https://playwright.dev/docs/api/class-page
    // using the "page.evaluate" method
    // inject into the application's window a script
    // that replaces "window.Math.random" method with a dummy
    // function that:
    // - calls the real Math.random() to generate a random float
    // - stores the newly created random float
    // - returns the created random float to the caller
    // Tip: to later be able to read the generated float
    // stores it as a property of the window object

    // type new type "Code" into the input box
    await page.locator('input.new-todo').fill('Code')
    await page.locator('input.new-todo').press('Enter')
    // by now, the Math.random should have been called by the application
    // use the "page.evaluate" to get the saved valued
    // which is the random number the app used to derive the todo "id"
    // use the same logic to form the string item ID value

    // log the id the app received
    // wait for the network call to post the new todo
    // get the post network request data
    // and confirm ALL its fields
  })
})
