// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    // intercept the route "/todos"
    // - "GET /todos" respond with an empty list
    // - otherwise let the request continue
    await page.goto('/')
  })

  test('shows the items with css class', async ({ page }) => {
    // confirm the application has finished loading
    // by checking the presence of an element with class "loaded"
    // there should be no todos
    // spy on the "POST /todos" call
    // type new todo "Learn testing" followed by Enter
    // confirm the new todo was sent over the network
    // get the request data and confirm the known properties
    // like "title" and "completed"
    // the "id" property should be a string
  })
})
