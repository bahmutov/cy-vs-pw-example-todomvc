// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    // spy on the network call "GET /todos"
    // give the network intercept an alias
    cy.visit('/')
  })

  it('shows the same number of items as sent by the server', () => {
    // wait for the network alias
    // get its response body and confirm
    // it is an array
    // grab its length and pass it to the cy.then callback
    // inside the callback get the number of Todo items
    // on the page, it should equal to the number of items
    // returned by the server
    // https://on.cypress.io/then
  })
})
