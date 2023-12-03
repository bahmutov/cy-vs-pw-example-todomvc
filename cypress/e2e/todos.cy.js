// @ts-check
/// <reference types="cypress" />
/// <reference types="cypress-map" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'
import items from '../../fixtures/products.json'

describe('Prices', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    // visit the base url
    cy.visit('/')
  })

  it('shows items sorted by price', () => {
    // common locators
    const todos = '.todo-list li'

    // rewrite the following cy.then commands
    // using the cypress-map plugin commands
    cy.get(todos)
      .map('innerText')
      .print()
      .mapInvoke('match', /\$(?<price>\d+)/)
      .map('groups.price')
      .map(parseFloat)
      .should((prices) => {
        const sorted = Cypress._.sortBy(prices)
        expect(sorted).to.not.be.empty
        expect(sorted, 'sorted from min to max').to.deep.equal(prices)
      })
  })
})
