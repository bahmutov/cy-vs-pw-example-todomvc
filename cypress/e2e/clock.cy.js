// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('fetches todos every 60 seconds', () => {
    // spy on the "GET /todos" requests and
    // give them an alias "loadTodos"
    // https://on.cypress.io/intercept

    // control the application's clock
    // https://on.cypress.io/clock

    cy.visit('/')
    // confirm the application called the "loadTodos" endpoint
    // Tip: you can even use a short 100ms timeout

    // advance the application's clock by 61 seconds
    // https://on.cypress.io/tick
    // confirm the application called the "loadTodos" endpoint

    // advance the application's clock by another 61 seconds
    // confirm the application called the "loadTodos" endpoint
  })
})
