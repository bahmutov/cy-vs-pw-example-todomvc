// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
    cy.get('.loaded')
  })

  it('assigns a different id to each new item', () => {
    // start spying on the "POST /todos" calls
    // assign the intercept an alias "post-todo"
    // add new todo with text "first todo"
    // get the request id sent by the application
    // from the network call "post-todo"
    // confirm it is a string
    // add new todo with text "second todo"
    // get the request id from the second todo
    // sent by the application
    // confirm it is a string
    // and it is different from the first request
  })
})
