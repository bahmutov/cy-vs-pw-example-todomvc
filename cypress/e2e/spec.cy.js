// @ts-check
/// <reference types="cypress" />

// commands operate with respect to the "baseUrl"
// defined in the cypress.config.js file

// beforeEach(() => {
//   cy.request('POST', '/reset', { todos: [] })
// })

// Tip: look at the following commands before writing this test
// https://on.cypress.io/visit
// https://on.cypress.io/get
// https://on.cypress.io/type
it('has title', () => {
  cy.visit('http://localhost:3000')
  cy.get('body.loaded').should('be.visible')
  cy.get('.todo-list li').should('have.length', 0)

  // find the input element using the placeholder text
  // and type "Write code" followed by "Enter" press
  cy.get('[placeholder="What needs to be done?"]').type('Write code{enter}')

  cy.get('.todo-list li label')
    .should('have.length', 1)
    .and('have.text', 'Write code')
})
