// @ts-check
const { test, expect } = require('@playwright/test')

import todos from '../fixtures/3-todos.json'

test('GET /todos call', async ({ page, request }) => {
  await request.post('/reset', { data: { todos } })
  const getTodosPromise = page.waitForResponse('**/todos')
  await page.goto('/')
  const response = await getTodosPromise
  const items = await response.json()
  expect(items, 'same items').toEqual(todos)
})
