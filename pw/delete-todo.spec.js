// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  let load

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('.loaded').waitFor()
  })

  test('deletes a todo', async ({ page }) => {
    const title = 'Advance ' + Math.round(Math.random() * 1e6)

    // spy on the "POST /todos" network call
    const post = page.waitForRequest(
      (req) => req.method() === 'POST' && req.url().endsWith('/todos'),
    )
    // enter the new todo with a random title
    await page.locator('input.new-todo').fill(title)
    await page.locator('input.new-todo').press('Enter')
    // wait for the post call and get the todo item id
    const request = await post
    const id = (await (await request.response())?.json())?.id
    // spy on the "DELETE /todos/:id" network call
    const del = page.waitForRequest(
      (req) => req.method() === 'DELETE' && req.url().endsWith(`/todos/${id}`),
    )
    // find the newly entered todo item
    // and click on the delete button
    const todoElement = await page.locator('li.todo', { hasText: title })
    await todoElement.hover()
    await todoElement.locator('.destroy').click()
    // confirm the delete network call happens
    // and the server responded with the status code 200
    const delRequest = await del
    const statusCode = (await delRequest.response())?.status()
    expect(statusCode, 'delete status code').toEqual(200)
    // confirm the new todo is no longer on the page
    await expect(todoElement).not.toBeAttached()
  })
})
