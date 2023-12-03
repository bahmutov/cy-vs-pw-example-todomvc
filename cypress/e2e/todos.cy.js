// @ts-check
/// <reference types="cypress" />

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

    // confirm there are several items
    // and parse each item's title to get the prices
    // and confirm they are sorted in the ascending order
    cy.get(todos)
      .then(($el) => Cypress._.map($el, 'innerText'))
      .then((titles) => titles.map((s) => s.match(/\$(?<price>\d+)/)))
      .then((matches) => matches.map((m) => m?.groups?.price))
      // @ts-ignore
      .then((strings) => strings.map(parseFloat))
      .should((prices) => {
        const sorted = Cypress._.sortBy(prices)
        expect(sorted, 'sorted from min to max').to.deep.equal(prices)
      })
  })
})
