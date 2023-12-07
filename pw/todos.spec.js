// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.request.post('/reset', { data: { todos: [] } })
    await page.goto('/')
    await page.locator('.loaded').waitFor()
  })

  test('assigns a different id to each new item', async ({ page }) => {
    // spy on the first call to "POST /todos"
    // add new todo with text "first todo"
    // get the request id sent by the application
    // from the network call "post-todo"
    // confirm it is a string
    // spy on the second call to "POST /todos"
    // add new todo with text "second todo"
    // get the request id from the second todo
    // sent by the application
    // confirm it is a string
    // and it is different from the first request
  })
})
