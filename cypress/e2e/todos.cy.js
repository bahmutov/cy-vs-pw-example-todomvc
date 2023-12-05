// @ts-check
/// <reference types="cypress" />
/// <reference types="cypress-map" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'
import items from '../../fixtures/products.json'

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    cy.visit('/')
  })

  it('shows the items with css class', () => {
    const todos = '.todo-list li'

    // from the list of items get the list of titles
    // and the list of CSS classes each item element should have
    // completed? "todo" + "completed"
    // incomplete? just "todo"

    // confirm the todo items have the titles
    // and the class names
  })
})
