// @ts-check
/// <reference types="cypress" />

// before each test clear all todos
// by making a POST request to "/reset" endpoint
// and pass an object { todos: [] }
// which should clear all existing todos
// see:
// https://on.cypress.io/writing-and-organizing-tests#Hooks
// https://on.cypress.io/request
beforeEach(() => {
  cy.request('POST', 'http://localhost:3000/reset', { todos: [] })
})

it('has title', () => {
  // visit the page "localhost:3000"
  // https://on.cypress.io/visit
  cy.visit('http://localhost:3000/')

  // confirm the page has finished loading todos
  // and the body element has CSS class "loaded"
  // https://on.cypress.io/get
  // https://on.cypress.io/assertions
  cy.get('body').should('have.class', 'loaded')
  // alternative: use the built-in existence assertion
  cy.get('body.loaded')

  // confirm there are 0 todo items on the page
  // use the CSS selector ".todo-list li"
  // https://on.cypress.io/get
  // https://on.cypress.io/assertions
  cy.get('.todo-list li').should('have.length', 0)
})
