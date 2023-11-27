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
    // can you hover of the todo item
    // and avoid using .click({ force: true })
    cy.get(todos).eq(1).find('.destroy').click({ force: true })

    cy.get(todos)
      .should('have.length', 2)
      .then(($li) => Cypress._.map($li, 'innerText'))
      .should('deep.equal', ['Write code', 'Make tests pass'])

    // can you hover of the todo item
    // and avoid using .click({ force: true })
    cy.get(todos).first().find('.destroy').click({ force: true })
    cy.get(todos).should('have.length', 1).contains('Make tests pass')
  })
})
