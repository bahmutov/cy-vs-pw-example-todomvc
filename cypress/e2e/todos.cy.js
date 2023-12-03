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

    // use cy.then to process the jQuery
    // yielded by the cy.get command

    // - get the elements
    // - get the text from each element
    // - use regexp to get the price string from each item text
    // - convert each string into a number
    // - confirm the numbers are sorted
    cy.get(todos).should(($el) => {
      const titles = Cypress._.map($el, 'innerText')
      console.log(titles)
      const matches = titles.map((s) => s.match(/\$(?<price>\d+)/))
      const strings = matches.map((m) => m?.groups?.price)
      // @ts-ignore
      const prices = strings.map(parseFloat)
      const sorted = Cypress._.sortBy(prices)
      expect(sorted).to.not.be.empty
      expect(sorted, 'sorted from min to max').to.deep.equal(prices)
    })
  })
})
