// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

describe('Complete todos', () => {
  beforeEach(() => {
    // confirm there are several items
    // and some are completed and some are not
    expect(items.length, 'number of items').to.be.greaterThan(0)
    expect(
      items.some((item) => item.completed),
      'has completed items',
    ).to.be.true
    expect(
      items.some((item) => !item.completed),
      'has incomplete items',
    ).to.be.true
    cy.request('POST', '/reset', { todos: items })
  })

  it('completes a todo', () => {
    // common locators
    const todos = '.todo-list li'
    const count = '[data-cy="remaining-count"]'

    cy.visit('/')

    // shows the expected number of items
    cy.get(todos).should('have.length', items.length)

    // check each item
    items.forEach((item, k) => {
      cy.get(todos).eq(k).contains('label', item.title)
      if (item.completed) {
        cy.get(todos).eq(k).should('have.class', 'completed')
      } else {
        cy.get(todos).eq(k).should('not.have.class', 'completed')
      }
    })

    // shows the remaining count
    const n = items.filter((item) => !item.completed).length
    cy.contains(count, n)
  })
})
