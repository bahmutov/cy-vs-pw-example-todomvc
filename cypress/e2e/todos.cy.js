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

    // the application starts several items
    // assume that we don't know the exact number
    // but we expect more than 2 items
    cy.get(todos).should('have.length.above', 2)
    cy.get(todos).should('have.length.greaterThan', 2)
    // gte = greater than or equal
    cy.get(todos).should('have.length.gte', 3)
    cy.get(todos).should(
      'satisfy',
      ($el) => $el.length > 2,
      'more than 2 elements',
    )
  })
})
