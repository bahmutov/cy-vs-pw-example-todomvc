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
    cy.intercept('POST', '/todos').as('post')
    // enter the new todo with a random title
    cy.get('input.new-todo').type(title + '{enter}')
    // wait for the post call and get the todo item id
    cy.wait('@post')
      .its('request.body.id')
      .should('be.a', 'string')
      .then((id) => {
        // spy on the "DELETE /todos/:id" network call
        cy.intercept('DELETE', `/todos/${id}`).as('del')
        // find the newly entered todo item
        // and click on the delete button
        cy.contains('li.todo', title).find('.destroy').click({ force: true })
        // confirm the delete network call happens
        // and the server responded with the status code 200
        cy.wait('@del').its('response.statusCode').should('equal', 200)
      })
    // confirm the new todo is no longer on the page
    cy.contains('li.todo', title).should('not.exist')
  })
})
