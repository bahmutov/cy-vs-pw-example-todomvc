// @ts-check
/// <reference types="cypress" />

// https://github.com/bahmutov/cy-spok
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
    cy.get('.loaded')
    cy.get(todos).should('have.length', 0)
    cy.intercept('POST', '/todos').as('post-todo')
    cy.get('.new-todo').type('Learn testing{enter}')
    // confirm the new todo was sent over the network
    // and the request includes
    // - title "Learn testing"
    // - completed: false
    // - id: a string
    // and the response status code is 201
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
