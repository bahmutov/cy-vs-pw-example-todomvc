// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('stores todos in the Vuex data store', () => {
    // load todos from the fixture file "two-items.json"
    // and reset the backend to only have those todo items
    cy.fixture('two-items').then((todos) => {
      cy.request('POST', '/reset', { todos })
    })
    // signal to the app to set the "window.app" object
    cy.visit('/')
    // there should be two items on the page

    // there should be an object "app" on the "window" of the application

    // the "app" object should have a property "todos"
    // with 2 items. If you map each item to its "title" property
    // it should yield an array with:
    // ["Code the app", "Write the tests"]
  })
})
