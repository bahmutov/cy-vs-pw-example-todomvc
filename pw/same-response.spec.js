// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('responds with the same data on posting new item', async ({ page }) => {
    await page.goto('/')
    await page.locator('.loaded').waitFor()
    // spy on the "POST /todos" call
    // enter a new todo "Test"
    // wait for the POST call to happen
    // get the send data and the response data
    // and confirm they are the same
  })
})
