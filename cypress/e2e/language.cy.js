// @ts-check
/// <reference types="cypress" />

it('HTML language attribute is set to English', () => {
  cy.visit('/')
  // confirm the HTML element has lang="en"
  // https://on.cypress.io/root
  cy.get('html').should('have.attr', 'lang', 'en')
})
