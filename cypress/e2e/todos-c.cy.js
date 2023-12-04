// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/products.json'

describe('Prices', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    cy.visit('/')
  })

  it('shows items sorted by price - C', () => {
    const todos = '.todo-list li'

    cy.get(todos).should(($el) => {
      const titles = Cypress._.map($el, 'innerText')
      console.log(titles)
      const matches = titles.map((s) => s.match(/\$(?<price>\d+)/))
      const strings = matches.map((m) => m?.groups?.price)
      // @ts-ignore
      const prices = strings.map(parseFloat)
      expect(prices).to.deep.equal([1, 4, 59])
    })
  })
})
