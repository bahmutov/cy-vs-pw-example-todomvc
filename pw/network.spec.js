// @ts-check
const { test, expect } = require('@playwright/test')

import todos from '../fixtures/3-todos.json'

test('sends the new todo object', async ({ request, page }) => {
  await request.post('/reset', { data: { todos } })
  await page.goto('/')
  await page.waitForSelector('.loaded')

  // enter a new todo item
  // and confirm the POST /todos request body has:
  // - a 'title' property with the correct value
  // - a 'completed' property set to false
  // - an 'id' string property
  const newTodo = 'walk the dog'
  const postTodoPromise = page.waitForResponse(
    (response) =>
      response.url().endsWith('/todos') &&
      response.request().method() === 'POST',
  )
  await page.fill('.new-todo', newTodo)
  await page.keyboard.press('Enter')
  const postResponse = await postTodoPromise
  const postResponseBody = await postResponse.json()
  expect(postResponseBody).toMatchObject({ title: newTodo, completed: false })
  expect(postResponseBody).toHaveProperty('id')
  expect(typeof postResponseBody.id).toBe('string')
})
