// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

describe('App routing', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
  })

  it('shows all, completed, or incomplete todos', () => {
    // common locators
    const todos = '.todo-list li'

    // the application starts with 3 items
    cy.visit('/')
    cy.get(todos).should('have.length', 3)

    // inside the "footer" element there is a list with class "filters"
    // tip: Cypress has cy.within command useful to work with a part of the page
    // https://on.cypress.io/within
    // by default, the filter "All" is selected and nothing else
    // click on the "Active" link and confirm the URL changes its hash
    // part to "#/active"
    // there should be 2 todo items shown

    // the filter "Active" is selected instead of "All" and nothing else
    // click on the "Completed" link and confirm the URL hash changes
    // there should be just one item shown

    // the filter "Completed" is selected, and nothing else
    // click on the "All" link and confirm the URL hash changes
    // and we are back to 3 items
  })
})
