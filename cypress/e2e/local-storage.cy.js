// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('stores todos in the local storage', () => {
    // load todos from the fixture file "two-items.json"
    // and reset the backend to only have those todo items
    cy.fixture('two-items').then((todos) => {
      cy.request('POST', '/reset', { todos })
    })
    cy.visit('/')
    // there should be two items on the page
    cy.get('.todo').should('have.length', 2)
    // the local storage should have two items
    // Tip: the local storage is available under "window.localStorage"
    // and to get an item from the local storage you
    // can invoke the "getItem" method on it
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'todos')
      // confirm the item is a string
      // then parse it into an object
      .should('be.a', 'string')
      // @ts-ignore
      .then(JSON.parse)
      // which should be an array with 2 items
      .should('have.length', 2)
  })
})
