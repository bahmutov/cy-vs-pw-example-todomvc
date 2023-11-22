// @ts-check
/// <reference types="cypress" />

// commands operate with respect to the "baseUrl"
// defined in the cypress.config.js file

beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('adding todos', () => {
  // reuse the same CSS selectors
  const input = '[placeholder="What needs to be done?"]'
  const todos = '.todo-list li label'

  cy.visit('/')
  cy.get('body.loaded').should('be.visible')
  cy.get(todos).should('not.exist')
  cy.get(input).type('Write code{enter}')
  cy.get(todos).should('have.length', 1).and('have.text', 'Write code')
})
