// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('stubs the load data network call three different ways', async ({
    page,
  }) => {
    const todos = page.locator('.todo-list li')

    // stub the "GET /todos" network call
    // on the first call return the data from the "fixtures/one.json" file
    // on the second call return the data from the "fixtures/two.json" file
    // on the third call return the data from the "fixtures/three.json" file

    // load the page
    // and confirm only 1 todo is shown
    // reload the page
    // confirm there are 2 todos
    // reload the page
    // confirm there are 3 todos
    // reload the page one more time
    // and confirm the 3 todos are still there
  })
})
