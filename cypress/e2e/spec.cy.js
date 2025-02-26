// @ts-check
/// <reference types="cypress" />

it('has title', () => {
  // visit the page "localhost:3000"
  // https://on.cypress.io/visit
  cy.visit('http://localhost:3000/')

  // the page title should have text "cy-vs-pw-example-todomvc"
  // https://on.cypress.io/title
  cy.title().should('equal', 'cy-vs-pw-example-todomvc')

  // confirm there are 3 todo items on the page
  // use the CSS selector ".todo-list li"
  // https://on.cypress.io/get
  // and "should have length" assertion
  // https://on.cypress.io/should
  cy.get('.todo-list li').should('have.length', 3)
})
