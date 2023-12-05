// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    // stub the "GET /todos" network calls
    // and return an empty array
    cy.visit('/')
  })

  it('sends new todo object', () => {
    const todos = '.todo-list li'
    // confirm the application has finished loading
    // by checking the presence of an element with class "loaded"
    // and there are no items

    // spy on the "POST /todos" call
    // give the spy an alias "post-todo"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    // type new todo "Learn testing" followed by Enter

    // confirm the new todo was sent over the network
    // get the request body and confirm the known properties
    // like "title" and "completed"
    // Tip: use the Chai assertion "deep.include"
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html
    // confirm the request body includes the property "id"
    // which should be a string
    // get the network intercept with the new todo again
    // and confirm the server responds with status code 201
    // Tip: you wait for the network intercept to happen
    // and then can use cy.get('@alias') to retrieve it multiple times
  })
})
