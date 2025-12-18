// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'

it('stub GET and POST /todos calls', () => {
  cy.intercept('GET', '/todos', { body: todos }).as('getTodos')
  cy.intercept('POST', '/todos', (req) => {
    // send the request body back in the response
    req.reply(req.body)
  }).as('postTodos')
  cy.visit('/')
  cy.wait('@getTodos')
  cy.get('.todo-list li').should('have.length', todos.length)

  // enter a new todo item
  // and confirm the POST /todos request body
  // is sent correctly
  const newTodo = 'walk the dog'
  cy.get('.new-todo').type(`${newTodo}{enter}`)
  cy.get('.todo-list li').should('have.length', todos.length + 1)
  cy.wait('@postTodos')
    .its('request.body')
    .should('have.property', 'title', newTodo)
})
