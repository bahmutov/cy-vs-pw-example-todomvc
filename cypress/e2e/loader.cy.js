// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('shows a loader', () => {
    // intercept the "GET /todos" network call
    // let the call continue to the server
    // but delay it by 2 seconds
    // This should give the loading element plenty of time
    cy.visit('/')
    // confirm the loading element is visible
    // and then becomes hidden

    // confirm the app finishes loading really quickly
    // after the loader becomes hidden
  })
})
