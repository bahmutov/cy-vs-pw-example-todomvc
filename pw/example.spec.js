// @ts-check
const { test, expect } = require('@playwright/test')

// start each test with zero todos
test.beforeEach(async ({ request }) => {
  await request.post('/reset', { data: { todos: [] } })
})

test('adding todos', async ({ page }) => {
  await page.goto('/')
  // use CSS selector as a locator
  await expect(page.locator('body.loaded')).toBeVisible()

  const todoApp = page.locator('.todoapp')
  const todoInput = todoApp.getByPlaceholder('What needs to be done?')
  const todoList = todoApp.locator('.todo-list')
  const todoItems = todoList.locator('li.todo')
  const firstTodo = todoItems.first()
  const firstLabel = firstTodo.locator('label')

  await todoInput.fill('Write code')
  await todoInput.press('Enter')

  // there should be one todo item on the page
  await expect(todoItems).toHaveCount(1)
  console.log(firstLabel)
  // with the label "Write code"
  await expect(firstLabel).toHaveText('Write code')
})
