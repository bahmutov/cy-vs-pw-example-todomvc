// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.request.post('/reset', { data: { todos: [] } })
    await page.goto('/')
    await page.locator('.loaded').waitFor()
  })

  test('assigns a different id to each new item', async ({ page }) => {
    const routeMatcher = (req) => {
      return req.method() === 'POST' && req.url().endsWith('/todos')
    }
    const postTodo1 = page.waitForRequest(routeMatcher)
    await page.locator('.new-todo').fill('first todo')
    await page.locator('.new-todo').press('Enter')
    const id1 = (await postTodo1).postDataJSON().id
    expect(id1, 'first id').toEqual(expect.any(String))

    const postTodo2 = page.waitForRequest(routeMatcher)
    await page.locator('.new-todo').fill('first todo')
    await page.locator('.new-todo').press('Enter')
    const id2 = (await postTodo2).postDataJSON().id
    expect(id2, 'second id').toEqual(expect.any(String))

    expect(id2, 'ids are different').not.toEqual(id1)
  })
})
