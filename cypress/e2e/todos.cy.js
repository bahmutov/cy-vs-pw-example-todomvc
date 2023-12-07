// @ts-check
/// <reference types="cypress" />

import spok from 'cy-spok'

describe('App', () => {
  beforeEach(() => {
    // stub the "GET /todos" network calls
    // and return an empty array
    cy.intercept('GET', '/todos', { body: [] })
    cy.visit('/')
  })

  it('sends new todo object', () => {
    const todos = '.todo-list li'
    // confirm the application has finished loading
    cy.get('.loaded')
    // and there are no items
    cy.get(todos).should('have.length', 0)
    // spy on the "POST /todos" call
    // give the spy an alias "post-todo"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    cy.intercept('POST', '/todos').as('post-todo')
    cy.get('.new-todo').type('Learn testing{enter}')
    // confirm the new todo was sent over the network
    cy.wait('@post-todo').should(
      spok({
        request: {
          body: {
            title: 'Learn testing',
            completed: false,
            id: spok.string,
          },
        },
        response: {
          statusCode: 201,
        },
      }),
    )
  })
})
