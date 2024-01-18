// @ts-check
/// <reference types="cypress" />

import 'cypress-map'

describe('App', () => {
  it('gets the todos from the application', () => {
    // load todos from the fixture file "two-items.json"
    // and reset the backend to only have those todo items
    cy.fixture('two-items').then((todos) => {
      cy.request('POST', '/reset', { todos })
      cy.visit('/')
      // get the list of todos from the application
      // using the "window.appTodos" property
      //
      // confirm that the todo titles you got from the app
      // are the same as the titles in the loaded todos fixture
      //
      // confirm that each item in the todos list points at the list
      // via the "list" property
    })
  })
})
