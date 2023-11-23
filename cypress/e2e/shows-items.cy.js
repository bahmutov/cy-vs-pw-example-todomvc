// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

describe('Complete todos', () => {
  beforeEach(() => {
    // confirm there are several items
    // and some are completed and some are not

    cy.request('POST', '/reset', { todos: items })
  })

  it('completes a todo', () => {
    // common locators
    const todos = '.todo-list li'
    const count = '[data-cy="remaining-count"]'

    cy.visit('/')

    // shows N items

    // go through the items and confirm each is rendered correctly
    // - label text
    // - completed or not

    // confirm the remaining items count is correct
  })
})
