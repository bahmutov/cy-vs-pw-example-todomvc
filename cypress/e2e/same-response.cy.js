// @ts-check
/// <reference types="cypress" />

// increase the threshold to see the full object
// in the assertion "deep.equal"
chai.config.truncateThreshold = 500

describe('App', () => {
  it('responds with the same data on posting new item', () => {
    cy.visit('/')
    cy.get('.loaded')
    // spy on the "POST /todos" network call
    // and give the intercept an alias "post"
    // enter a new todo
    // wait for the "post" intercept and then
    // confirm the server responds with the same data
    // back as the web app sends in the request
  })
})
