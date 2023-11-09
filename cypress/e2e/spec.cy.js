// @ts-check
/// <reference types="cypress" />

// commands operate with respect to the "baseUrl"
// defined in the cypress.config.js file

beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('has title', () => {
  console.log('running test "%s"', Cypress.currentTest.titlePath.join('/'))
  cy.visit('/')
  cy.get('body.loaded')
  cy.get('.todo-list li').should('have.length', 0)
})
