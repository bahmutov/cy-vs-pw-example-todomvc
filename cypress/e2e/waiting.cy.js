// @ts-check
/// <reference types="cypress" />

it('waits for the button to be enabled', () => {
  cy.visit('/')
  cy.get('#click').click()
})
