// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
  })

  it('deletes items', () => {
    // common locators
    const todos = '.todo-list li'

    cy.visit('/')
    cy.get(todos).should('have.length', 3)

    // delete one completed item (the middle one)
    // confirm the remaining two items are still there
    // delete one incomplete item (the first one)
    // confirm the one remaining item
  })
})
