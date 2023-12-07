// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('responds with the same data on posting new item', async ({ page }) => {
    await page.goto('/')
    await page.locator('.loaded').waitFor()
    // spy on the "POST /todos" call
    const post = page.waitForRequest(
      (req) => req.method() === 'POST' && req.url().endsWith('/todos'),
    )
    // enter a new todo "Test"
    await page.locator('input.new-todo').fill('Test')
    await page.locator('input.new-todo').press('Enter')
    // wait for the POST call to happen
    const request = await post
    // get the send data and the response data
    const sendData = request.postDataJSON()
    const receivedData = await (await request.response())?.json()
    // and confirm they are the same
    expect(sendData, 'same item').toEqual(receivedData)
  })
})
