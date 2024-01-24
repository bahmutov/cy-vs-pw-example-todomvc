import { test, type Page, expect } from '@playwright/test'

import todos from '../fixtures/two-items.json'
// confirm there are more than 1 todos
expect(todos.length, 'number of todos').toBeGreaterThan(1)

// reuse the same page for all tests
let page: Page

test('shows the list of todos', async () => {
  page.goto('/')
  // confirm the number of todos shown
  // confirm the all todos are active (do not have class completed)
  // there should be no completed todos
})

test('completes the first todo', async () => {
  // find the first todo and click on its ".toggle" button
  // the first todo should get the class "completed"
})

test('clears completed todos', async () => {
  // click on the button with the text "Clear completed"
  // the number of todos should go down by 1
  // there should be no completed todos
})
