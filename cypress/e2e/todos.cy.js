// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    // visit the base url
    cy.visit('/')
  })

  it('shows more than 2 items at the start', () => {
    // common locators
    const todos = '.todo-list li'

    // rewrite the following assertion using a chain of commands
    // - get the elements, which in Cypress yields a jQuery object (1)
    // - get the property `length` from that jQuery object (2)
    // - confirm the number is greater than 2 (3)
    // - if the assertion (3) fails, go back to (1)
    cy.get(todos).should(($el) => {
      expect($el.length, 'more than 2 elements').to.be.greaterThan(2)
    })
  })
})
