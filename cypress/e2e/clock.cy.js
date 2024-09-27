// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('fetches todos every 60 seconds', () => {
    cy.intercept('GET', '/todos').as('loadTodos')
    cy.clock()
    cy.visit('/')
    cy.wait('@loadTodos', { timeout: 100 })

    cy.tick(61_000)
    cy.wait('@loadTodos', { timeout: 100 })

    cy.tick(61_000)
    cy.wait('@loadTodos', { timeout: 100 })
  })
})
