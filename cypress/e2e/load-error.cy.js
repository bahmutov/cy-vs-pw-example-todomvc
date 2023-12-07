// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('logs a server error', () => {
    // stub the "GET /todos" route and return
    // an object with status code 500
    // and the body "server error"
    // Give this stub the alias "load"
    // visit the page and stub the "console.error" method
    // give this stub an alias "console-error"
    // https://on.cypress.io/visit
    // https://on.cypress.io/stub
    // wait for the network call
    // get the stub "console-error" and confirm it was called
    // with the argument "server error"
  })
})
