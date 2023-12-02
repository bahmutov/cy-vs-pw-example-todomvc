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
    // Use cy...should(callback) to confirm the count > 2
    // https://on.cypress.io/should
    // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  })
})
