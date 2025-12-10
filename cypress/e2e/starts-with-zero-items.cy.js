// @ts-check
/// <reference types="cypress" />

describe('TodoMVC', () => {
  beforeEach(() => {
    // call a special testing endpoint our app uses
    // and reset all todos to an empty list
    cy.request('POST', '/reset', { todos: [] })
  })

  it('starts with zero items', () => {
    cy.visit('/')
    cy.get('body.loaded')
    cy.get('.todo').should('have.length', 0)
  })
})
