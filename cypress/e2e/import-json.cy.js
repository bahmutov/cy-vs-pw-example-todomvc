// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'

// confirm we have a few todos imported
expect(todos, 'have a few todos').to.have.length.greaterThan(2)

describe('TodoMVC', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos })
  })

  it('completes a todo', () => {
    cy.visit('/')
    cy.get('.todo-list li').should('have.length', todos.length)
  })
})
