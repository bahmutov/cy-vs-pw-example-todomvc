// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    // intercept the route "/todos"
    // - "GET /todos" respond with an empty list
    // - otherwise let the request continue
    await page.route('/todos', (route) => {
      if (route.request().method() === 'GET') {
        return route.fulfill({
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify([]),
        })
      } else {
        return route.continue()
      }
    })
    await page.goto('/')
  })

  test('shows the items with css class', async ({ page }) => {
    // confirm the application has finished loading
    // by checking the presence of an element with class "loaded"
    await page.locator('.loaded').waitFor()
    // there should be no todos
    await expect(page.locator('.todo-list li')).toHaveCount(0)
    // spy on the "POST /todos" call
    const postTodo = page.waitForRequest((req) => {
      return req.method() === 'POST' && req.url().endsWith('/todos')
    })
    // type new todo "Learn testing" followed by Enter
    await page.locator('.new-todo').fill('Learn testing')
    await page.locator('.new-todo').press('Enter')
    // confirm the new todo was sent over the network
    const request = await postTodo
    // get the request data and confirm the known properties
    // like "title" and "completed"
    // the "id" property should be a string
    const sent = request.postDataJSON()
    expect(sent, 'request data').toEqual({
      title: 'Learn testing',
      completed: false,
      id: expect.any(String),
    })
    const response = await request.response()
    expect(response?.status(), 'status code').toEqual(201)
  })
})
