// @ts-check
/// <reference types="cypress-real-events" />

import 'cypress-real-events'

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
    cy.get(todos).eq(1).realHover().find('.destroy').click()
    // confirm the remaining two items are still there
    cy.get(todos)
      .should('have.length', 2)
      .then(($li) => Cypress._.map($li, 'innerText'))
      .should('deep.equal', ['Write code', 'Make tests pass'])
    // delete one incomplete item (the first one)
    cy.get(todos).first().realHover().find('.destroy').click()
    // confirm the one remaining item
    cy.get(todos).should('have.length', 1).contains('Make tests pass')
  })
})
