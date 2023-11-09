// @ts-check
/// <reference types="cypress" />

// commands operate with respect to the "baseUrl"
// defined in the cypress.config.js file

beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('has title', () => {
  cy.visit('/')
  cy.get('body.loaded')
  cy.get('.todo-list li').should('have.length', 0)
})
