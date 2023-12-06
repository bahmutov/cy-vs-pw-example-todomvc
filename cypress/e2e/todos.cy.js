// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    // disable network caching using a Chrome Debugger Protocol command
    // by using "cy.wrap" command we ensure that the promise returned
    // by the Cypress.automation method resolves before proceeding
    // to the next Cypress command
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.setCacheDisabled',
        params: {
          cacheDisabled: true,
        },
      }),
    )
    // spy on the network call "GET /todos"
    // give the network intercept an alias
    cy.intercept('GET', '/todos').as('load')
    cy.visit('/')
  })

  it('shows the same number of items as sent by the server', () => {
    // wait for the network alias
    // get its response body and confirm
    // it is an array
    // grab its length and pass it to the cy.then callback
    // inside the callback get the number of Todo items
    // on the page, it should equal to the number of items
    // returned by the server
    // https://on.cypress.io/then
    cy.wait('@load')
      .its('response.body')
      .should('be.an', 'array')
      .its('length')
      .then((n) => {
        cy.get('.todo-list li').should('have.length', n)
      })
  })
})
