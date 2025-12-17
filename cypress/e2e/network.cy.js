// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'
import 'cypress-map'

it('stub GET /todos call', () => {
  cy.intercept('GET', '/todos', { body: todos }).as('getTodos')
  cy.visit('/')
  cy.wait('@getTodos')
  cy.get('.todo-list li label').should('read', Cypress._.map(todos, 'title'))
})
