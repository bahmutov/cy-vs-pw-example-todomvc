// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', '/todos', { body: [] })
    cy.visit('/')
  })

  it('sends new todo object', () => {
    const todos = '.todo-list li'
    // confirm the application has finished loading
    // by checking the presence of an element with class "loaded"
    cy.get('.loaded')
    // and there are no items
    cy.get(todos).should('have.length', 0)
    // spy on the "POST /todos" call
    // give the spy an alias "post-todo"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    cy.intercept('POST', '/todos').as('post-todo')
    // type new todo "Learn testing" followed by Enter
    cy.get('.new-todo').type('Learn testing{enter}')
    // confirm the new todo was sent over the network
    cy.wait('@post-todo')
      // get the request body and confirm the known properties
      // like "title" and "completed"
      // Tip: use the Chai assertion "deep.include"
      // https://glebbahmutov.com/cypress-examples/commands/assertions.html
      .its('request.body')
      .should('deep.include', {
        title: 'Learn testing',
        completed: false,
      })
      // confirm the request body includes the property "id"
      // which should be a string
      .its('id')
      .should('be.a', 'string')
    // get the network intercept with the new todo again
    // and confirm the server responds with status code 201
    // Tip: you wait for the network intercept to happen
    // and then can use cy.get('@alias') to retrieve it multiple times
    cy.get('@post-todo').its('response.statusCode').should('equal', 201)
  })
})
