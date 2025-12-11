// @ts-check
/// <reference types="cypress" />

describe('Complete todos', () => {
  beforeEach(() => {
    const todos = [
      {
        title: 'Write code',
        completed: false,
        id: '9719548620',
      },
      {
        title: 'Write tests',
        completed: false,
        id: '7560280342',
      },
      {
        title: 'Make tests pass',
        completed: false,
        id: '8607162111',
      },
    ]
    cy.request('POST', '/reset', { todos })
  })

  it('completes a todo', () => {
    const todos = '.todo-list li'

    cy.visit('/')

    // 3 incomplete todos
    cy.get(todos).should('have.length', 3)
    cy.get(todos).eq(0).should('not.have.class', 'completed')
    cy.get(todos).eq(1).should('not.have.class', 'completed')
    cy.get(todos).eq(2).should('not.have.class', 'completed')

    // complete the middle todo
    cy.get(todos).eq(1).find('.toggle').click()
    // confirm the middle todo is completed
    // while the other todos are not
    cy.get(todos).eq(1).should('have.class', 'completed')
    cy.get(todos).eq(0).should('not.have.class', 'completed')
    cy.get(todos).eq(2).should('not.have.class', 'completed')
  })
})
