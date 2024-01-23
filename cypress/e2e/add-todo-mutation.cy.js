// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('uses ADD_TODO mutation', () => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
    // the Vuex store used inside the application
    // calls a mutation to add new Todo to the store
    // ADD_TODO(state, todoObject) {
    //   state.todos.push(todoObject)
    // },
    // Can you access the mutations in the store
    // and spy on the ADD_TODO mutation?
    // Note: the list of mutations for ADD_TODO is an array
    // https://on.cypress.io/window
    // https://on.cypress.io/its
    // https://on.cypress.io/spy
    // confirm the list of ADD_TODO mutations has 1 element
    // spy on the first mutation and give it an alias "addTodo"
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
