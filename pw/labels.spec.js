// @ts-check
const { test, expect } = require('@playwright/test')
const items = require('../fixtures/three.json')

test.describe('App', () => {
  test.beforeEach(async ({ request, page }) => {
    await request.post('/reset', { data: { todos: items } })
    // visit the base url
  })

  test('shows the right labels', async ({ page }) => {
    // common locators
    const todos = page.locator('.todo-list li')
    // the application starts with 3 items

    // get the label from each item
    // and confirm the todos elements have the right text

    // confirm the todo elements have the labels
    // from the fixture file
  })
})
