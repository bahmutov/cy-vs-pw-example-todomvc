// @ts-check
/// <reference types="cypress" />

it('loads', () => {
  cy.visit('/')
  // confirm the app has loaded when the app sets
  // the "loaded" class on the body element
  cy.get('body.loaded').should('be.visible')
})
