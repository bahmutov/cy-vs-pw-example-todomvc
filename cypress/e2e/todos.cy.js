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
    const titles = Cypress._.map(items, 'title')
    const cssClasses = items.map((item) =>
      item.completed ? 'todo completed' : 'todo',
    )
    // confirm the todo items have the titles
    // and the class names
    cy.get(todos).map('innerText').should('deep.equal', titles)
    cy.get(todos).map('className').should('deep.equal', cssClasses)
  })
})
