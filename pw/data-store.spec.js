// @ts-check
const { test, expect } = require('@playwright/test')

// load the two todos from the "./fixtures/two-items.json" file
const todos = require('../fixtures/two-items.json')

test.describe('App', () => {
  test('stores todos in the Vuex data store', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { data: { todos } })
    // signal to the app to set the "window.app" object
    // visit the home page
    await page.goto('/')
    // there should be two items on the page

    // there should be an object "app" on the "window" of the application

    // the "app" object should have a property "todos"
    // with 2 items. If you map each item to its "title" property
    // it should yield an array with:
    // ["Code the app", "Write the tests"]
  })
})
