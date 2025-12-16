// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'

it('GET /todos call', () => {
  cy.request('POST', '/reset', { todos })
  cy.intercept('GET', '/todos').as('getTodos')
  cy.visit('/')
  cy.wait('@getTodos').its('response.body').should('deep.equal', todos)
})
