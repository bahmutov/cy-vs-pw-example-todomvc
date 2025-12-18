// @ts-check
const { test, expect } = require('@playwright/test')

import todos from '../fixtures/3-todos.json'

test('stub GET and POST /todos calls', async ({ page }) => {
  await page.route('/todos', (route) => {
    if (route.request().method() === 'POST') {
      // send the request body back in the response
      const postData = route.request().postDataJSON()
      route.fulfill({
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })
      return
    }

    route.fulfill({
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos),
    })
  })

  // now we need to separate waiting for GET vs POST /todos calls
  const getTodosPromise = page.waitForResponse(
    (response) =>
      response.url().endsWith('/todos') &&
      response.request().method() === 'GET',
  )
  await page.goto('/')
  await getTodosPromise
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length)

  // enter a new todo item
  // and confirm the POST /todos request body
  // is sent correctly
  const newTodo = 'walk the dog'
  const postTodoPromise = page.waitForResponse(
    (response) =>
      response.url().endsWith('/todos') &&
      response.request().method() === 'POST',
  )
  await page.fill('.new-todo', newTodo)
  await page.keyboard.press('Enter')
  await expect(page.locator('.todo-list li')).toHaveCount(todos.length + 1)
  const postResponse = await postTodoPromise
  const postResponseBody = await postResponse.json()
  expect(postResponseBody.title).toBe(newTodo)
})
