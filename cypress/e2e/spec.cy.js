// @ts-check
/// <reference types="cypress" />

// commands operate with respect to the "baseUrl"
// defined in the cypress.config.js file

beforeEach(() => {
  cy.request('POST', '/reset', { todos: [] })
})

it('adds todos', () => {
  cy.visit('/')
  cy.get('body.loaded').should('be.visible')

  cy.get('[placeholder="What needs to be done?"]').type('Write code{enter}')

  // there should be one todo item on the page
  cy.get('.todoapp')
    .find('.todo-list')
    .find('li.todo')
    .first()
    .find('label')
    .should('have.text', 'Write code')
})
