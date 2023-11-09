// @ts-check
/// <reference types="cypress" />

// start each test with zero todos
beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

// Tip: look at the following commands before writing this test
// https://on.cypress.io/visit
// https://on.cypress.io/get
// https://on.cypress.io/type
// https://glebbahmutov.com/cypress-examples/commands/assertions.html
it('has title', () => {
  // visit the application
  // wait for the body.loaded element to be visible
  // there should be zero todo items
  // find the input element using the placeholder text
  // and type "Write code" followed by "Enter" press
  // there should be one todo item on the page
  // the todo item label should have the entered text
})
