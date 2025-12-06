// @ts-check
/// <reference types="cypress" />

it('has the input box', () => {
  cy.visit('/')
  cy.get('[placeholder="What needs to be done?"]').should('be.visible')
})
