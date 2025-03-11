// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'
import 'cypress-real-events'

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
  })

  it('deletes items', () => {
    // common locators
    const todos = '.todo-list li'

    cy.visit('/')
    cy.get(todos).should('have.length', 3)
    // can you hover of the todo item
    // and avoid using .click({ force: true })
    cy.get(todos).eq(1).find('.destroy').invoke('show').click()
    cy.get(todos).should('have.length', 2)
  })
})
