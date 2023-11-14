// @ts-check
/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('adding todos', () => {
  // reuse the same CSS selectors
  cy.visit('/')
  cy.get('body.loaded').should('be.visible')
  cy.get('.todo-list li').should('have.length', 0)
  cy.get('[placeholder="What needs to be done?"]').type('Write code{enter}')
  cy.get('.todo-list li label')
    .should('have.length', 1)
    .and('have.text', 'Write code')
})
