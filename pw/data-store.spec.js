// @ts-check
const { test, expect } = require('@playwright/test')

// load the two todos from the "./fixtures/two-items.json" file
const todos = require('../fixtures/two-items.json')

test.describe('App', () => {
  test('stores todos in the Vuex data store', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { data: { todos } })
    await page.addInitScript(() => {
      // @ts-ignore
      window.exposeAppInstanceDuringTests = true
    })
    // visit the home page
    await page.goto('/')
    // there should be two items on the page
    await expect(page.locator('.todo')).toHaveCount(2)
    // there should be an object "app" on the "window" of the application
    const appPresent = await page.evaluate(() => {
      return 'app' in window
    })
    expect(appPresent, 'window.app is present').toBeTruthy()
    // the "app" object should have a property "todos"
    // with 2 items. If you map each item to its "title" property
    // it should yield an array with:
    // ["Code the app", "Write the tests"]
    const titles = await page.evaluate(() => {
      // @ts-ignore
      return window.app.todos.map((t) => t.title)
    })
    expect(titles, 'titles').toEqual(['Code the app', 'Write the tests'])
  })
})
