// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    // spy on the network calls to "/todos" endpoint
    await page.goto('/')
  })

  test('uses shows the same number of items as sent by the server', async ({
    page,
  }) => {
    // confirm the network call has happened
    // and get the response as json
    // confirm the page shows the same number of todo items
    // as send by the server
  })
})
