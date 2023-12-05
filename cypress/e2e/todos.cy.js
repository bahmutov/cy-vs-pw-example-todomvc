// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/products.json'

describe('Prices', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    // the application code will run after 6 second delay
    cy.visit('/?appStartDelay=6000')
  })

  it('shows items sorted by price - A', () => {
    const todos = '.todo-list li'
    // the elements will only appear after 6 seconds
    // can you increase the time for getting the elements
    // and retrying the elements?
    cy.get(todos, { timeout: 7_000 }).should('have.length', items.length)
  })
})
