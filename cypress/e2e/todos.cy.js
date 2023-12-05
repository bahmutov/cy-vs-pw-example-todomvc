// @ts-check
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'
import items from '../../fixtures/products.json'

describe('Prices', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    // the application code will run after 6 second delay
    cy.visit('/?appStartDelay=6000')
  })

  it('shows items sorted by price - A', () => {
    const todos = '.todo-list li'

    cy.get(todos, { timeout: 7_000 })
      .map('innerText')
      .print()
      .mapInvoke('match', /\$(?<price>\d+)/)
      .map('groups.price')
      .map(parseFloat)
      .should('deep.equal', [1, 4, 59])
  })
})
