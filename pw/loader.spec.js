// @ts-check
const { test } = require('@playwright/test')

test.describe('App', () => {
  test('shows a loader', async ({ page }) => {
    // intercept the "/todos" call
    // and delay it by 2 seconds before
    // allowing it to continue to the server

    // spy on the "/todos" network call
    // visit the page after setting up the network spies
    await page.goto('/')
    // confirm the loading element is visible
    // confirm the loading element is hidden
    // confirm the "/todos" call has happened
    // and the "class=loaded" element is visible quickly after
  })
})
