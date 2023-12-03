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
  })
})
