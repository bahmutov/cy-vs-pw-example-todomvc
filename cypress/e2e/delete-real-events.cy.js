// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'
import 'cypress-real-events'

// confirm we have a few todos imported
expect(todos, 'have a few todos').to.have.length.greaterThan(2)

describe('TodoMVC', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos })
  })

  it('deletes a todo', () => {
    const items = '.todo-list li'
    cy.visit('/')
    cy.get(items)
      .should('have.length', todos.length)
      .first()
      .realHover()
      .find('.destroy')
      .click()
    cy.get(items).should('have.length', todos.length - 1)
  })
})
