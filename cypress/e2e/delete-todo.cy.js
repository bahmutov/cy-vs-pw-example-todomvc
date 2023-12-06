// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
    // wait for the page to load the todos
    cy.get('.loaded')
  })

  it('deletes a todo', () => {
    const title = 'Advance ' + Cypress._.random(1e6)

    // spy on the "POST /todos" network call
    // enter the new todo with a random title
    // wait for the post call and get the todo item id
    // spy on the "DELETE /todos/:id" network call
    // find the newly entered todo item
    // and click on the delete button
    // confirm the delete network call happens
    // and the server responded with the status code 200
    // confirm the new todo is no longer on the page
  })
})
