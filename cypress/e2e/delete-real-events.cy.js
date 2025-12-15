// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'
import 'cypress-real-events'
import 'cypress-map'

describe('TodoMVC', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos })
  })

  it('deletes a todo', () => {
    const items = '.todo-list li'
    cy.visit('/')
    cy.get(items)
      .should('read', ['Write code', 'Write tests', 'Make tests pass'])
      .first()
      .realHover()
      .find('.destroy')
      .click()
    cy.get(items).should('read', ['Write tests', 'Make tests pass'])
  })
})
