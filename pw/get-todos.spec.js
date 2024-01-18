// @ts-check
const { test, expect } = require('@playwright/test')

// load the two todos from the "./fixtures/two-items.json" file
const todos = require('../fixtures/two-items.json')

test.describe('App', () => {
  test('gets the todos from the application', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { data: { todos } })
    // visit the home page
    await page.goto('/')
    // get the list of todos from the application
    // using the "window.appTodos" property
    const appTodos = await page.evaluate(() => window.appTodos)
    // confirm that the todo titles you got from the app
    // are the same as the titles in the loaded todos fixture
    const titles = appTodos.map((t) => t.title)
    const expectedTitles = todos.map((t) => t.title)
    expect(titles, 'todo titles').toEqual(expectedTitles)
    // confirm that each item in the todos list points at the list
    // via the "list" property
    appTodos.forEach((todo, k) => {
      expect(todo.list, `item ${k + 1}`).toBe(appTodos)
    })
  })
})
