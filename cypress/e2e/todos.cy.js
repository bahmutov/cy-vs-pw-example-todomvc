// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    // stub the "GET /todos" network call the application makes
    // and return the data from the fixture file "products.json"
    // give this network stub an alias "load"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    cy.visit('/')
  })

  it('shows 3 items', () => {
    const todos = '.todo-list li'
    // wait for the intercepted network call "load"

    // confirm the the number of shown todos is 3
    // and that todos show up within 100ms of the load network call
    cy.get(todos).should('have.length', 3)
  })
})
