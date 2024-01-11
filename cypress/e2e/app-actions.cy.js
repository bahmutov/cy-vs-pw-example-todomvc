// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('adds new todos by using an app action', () => {
    // load todos from the fixture file "two-items.json"
    // and reset the backend to only have those todo items
    cy.fixture('two-items').then((todos) => {
      cy.request('POST', '/reset', { todos })
    })
    cy.visit('/')
      // confirm the window object has the "app" property
      .should('have.property', 'app')
    // there should be two items on the page
    cy.get('.todo').should('have.length', 2)
    // call the method "dispatch" on the "app.$store" object
    // to add a new todo with the text "Run tests"
    cy.window().its('app.$store').invoke('dispatch', 'addTodo', 'Run tests')
    // confirm the list of todos has text
    // "Run tests" as the last item
    cy.get('li.todo').last().find('label').should('have.text', 'Run tests')
  })
})
