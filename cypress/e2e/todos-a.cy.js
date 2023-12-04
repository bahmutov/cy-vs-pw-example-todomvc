// @ts-check
/// <reference types="cypress" />
/// <reference types="cypress-map" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'
import items from '../../fixtures/products.json'

describe('Prices', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    cy.visit('/')
  })

  it('shows items sorted by price - A', () => {
    const todos = '.todo-list li'

    cy.get(todos)
      .map('innerText')
      .print()
      .mapInvoke('match', /\$(?<price>\d+)/)
      .map('groups.price')
      .map(parseFloat)
      .should('deep.equal', [1, 4, 59])
  })
})
