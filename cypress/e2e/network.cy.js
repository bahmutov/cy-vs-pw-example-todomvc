// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/3-todos.json'

it('sends the new todo object', () => {
  cy.request('POST', '/reset', { todos })
  cy.intercept('POST', '/todos').as('postTodos')
  cy.visit('/')

  cy.get('.loaded')

  // enter a new todo item
  // and confirm the POST /todos request body has:
  // - a 'title' property with the correct value
  // - a 'completed' property set to false
  // - an 'id' string property
  const newTodo = 'walk the dog'
  cy.get('.new-todo').type(`${newTodo}{enter}`)
  cy.wait('@postTodos')
    .its('request.body')
    .should('deep.include', { title: newTodo, completed: false })
    .and('have.property', 'id')
    .and('be.a', 'string')
})
