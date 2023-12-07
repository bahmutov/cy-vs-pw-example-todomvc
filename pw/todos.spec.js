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
    const routeMatcher = (req) => {
      return req.method() === 'POST' && req.url().endsWith('/todos')
    }
    const postTodo1 = page.waitForRequest(routeMatcher)
    // add new todo with text "first todo"
    await page.locator('.new-todo').fill('first todo')
    await page.locator('.new-todo').press('Enter')
    // get the request id sent by the application
    // from the network call "post-todo"
    // confirm it is a string
    const id1 = (await postTodo1).postDataJSON().id
    expect(id1, 'first id').toEqual(expect.any(String))

    // spy on the second call to "POST /todos"
    const postTodo2 = page.waitForRequest(routeMatcher)
    // add new todo with text "second todo"
    await page.locator('.new-todo').fill('first todo')
    await page.locator('.new-todo').press('Enter')
    // get the request id from the second todo
    // sent by the application
    // confirm it is a string
    const id2 = (await postTodo2).postDataJSON().id
    expect(id2, 'second id').toEqual(expect.any(String))
    // and it is different from the first request
    expect(id2, 'ids are different').not.toEqual(id1)
  })
})
