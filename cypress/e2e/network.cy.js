// @ts-check
/// <reference types="cypress" />

it('GET /todos call', () => {
  cy.intercept('GET', '/todos').as('getTodos')
  cy.visit('/')
  // confirm the network call was made
  cy.wait('@getTodos')
})
