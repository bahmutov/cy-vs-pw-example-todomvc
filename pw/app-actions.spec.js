// @ts-check
const { test, expect } = require('@playwright/test')

// load the two todos from the "./fixtures/two-items.json" file
const todos = require('../fixtures/two-items.json')

test.describe('App', () => {
  test('adds new todos by using an app action', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { data: { todos } })
    // visit the home page
    await page.goto('/')
    // there should be two items on the page
    // there should be an object "app" on the "window" of the application
    //
    // call the method "dispatch" on the "app.$store" object
    // to add a new todo with the text "Run tests"
    //
    // confirm the list of todos has text
    // "Run tests" as the last item
  })
})
