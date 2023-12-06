// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // wait for the page to load the todos
    await page.locator('.loaded').waitFor()
  })

  test('deletes a todo', async ({ page }) => {
    const title = 'Advance ' + Math.round(Math.random() * 1e6)

    // spy on the "POST /todos" network call
    // enter the new todo with a random title
    // wait for the post call and get the todo item id
    // spy on the "DELETE /todos/:id" network call
    // find the newly entered todo item
    // and click on the delete button
    // confirm the delete network call happens
    // and the server responded with the status code 200
    // confirm the new todo is no longer on the page
  })
})
