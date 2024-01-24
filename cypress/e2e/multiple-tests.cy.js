// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/two-items.json'

describe('Completing todos', { testIsolation: false }, () => {
  before(() => {
    // confirm there are more than 1 todos
    expect(todos).to.have.length.greaterThan(1)
    cy.request('POST', '/reset', { todos })
  })

  it('shows the list of todos', () => {
    cy.visit('/')
    cy.get('li.todo').should('have.length', todos.length)
    cy.log('**all todos are active**')
    cy.get('li.todo:not(.completed)').should('have.length', todos.length)
    // there should be no completed todos
    cy.get('li.todo.completed').should('have.length', 0)
  })

  it('completes the first todo', () => {
    cy.get('li').first().find('.toggle').click()
    cy.get('li').first().should('have.class', 'completed')
  })

  it('clears completed todos', () => {
    cy.contains('button', 'Clear completed').click()
    cy.get('li.todo').should('have.length', todos.length - 1)
    // there should be no completed todos
    cy.get('li.todo.completed').should('have.length', 0)
  })
})
