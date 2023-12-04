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

  it('shows items sorted by price - B', () => {
    const todos = '.todo-list li'

    cy.get(todos)
      .then(($el) => Cypress._.map($el, 'innerText'))
      .then((titles) => titles.map((s) => s.match(/\$(?<price>\d+)/)))
      .then((matches) => matches.map((m) => m?.groups?.price))
      // @ts-ignore
      .then((strings) => strings.map(parseFloat))
      .should('deep.equal', [1, 4, 59])
  })
})