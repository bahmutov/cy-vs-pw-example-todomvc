// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('App', () => {
  test('uses ADD_TODO mutation', async ({ page, request }) => {
    // reset the backend to only have those todo items
    // by making a network request to the "/reset" endpoint
    await request.post('/reset', { data: { todos: [] } })
    // visit the home page
    await page.goto('/')
    // the Vuex store used inside the application
    // calls a mutation to add new Todo to the store
    // ADD_TODO(state, todoObject) {
    //   state.todos.push(todoObject)
    // },
    // Can you access the mutations in the store
    // and spy on the ADD_TODO mutation?
    // Note: the list of mutations for ADD_TODO is an array
    // confirm the list of ADD_TODO mutations has 1 element
    // spy on the first mutation and give it an alias "addTodo"
    // store all arguments in an array "window.addTodoArgs"
    //
    // type the todo "a test" into the input element
    // confirm the "a test" todo appears on the page
    //
    // get the "addTodo" spy and confirm it was called
    // with expected argument object
    // Question: you know the title and the completed property
    // but how do you know the ID?
  })
})
