// @ts-check
/// <reference types="cypress" />

import 'cypress-map'

import todos from '../../fixtures/three-items.json'

before(() => {
  // confirm there are more than 1 todos
  expect(todos).to.have.length.greaterThan(1)
  cy.request('POST', '/reset', { todos })
})

it('shows the list of todos', () => {
  cy.visit('/')
  cy.get('li.todo').should('have.length', todos.length)
  cy.get('li.todo').first().should('contain', todos[0].title)
  cy.get('li.todo').second().should('contain', todos[1].title)
  cy.get('li.todo').third().should('contain', todos[2].title)
})
