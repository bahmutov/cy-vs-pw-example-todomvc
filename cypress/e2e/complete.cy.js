// @ts-check
/// <reference types="cypress" />

describe('Complete todos', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: [] })
  })

  it('completes a todo', () => {
    const input = '[placeholder="What needs to be done?"]'
    const todos = '.todo-list li'

    cy.visit('/')
    cy.get('body.loaded').should('be.visible')

    cy.get(input)
      .type('Write code{enter}')
      .type('Write tests{enter}')
      .type('Make tests pass{enter}')

    // complete the middle todo
    cy.get(todos).eq(1).find('.toggle').click()
    // confirm the middle todo is completed
    // while the other todos are not
    cy.get(todos).eq(1).should('have.class', 'completed')
    cy.get(todos).first().should('not.have.class', 'completed')
    cy.get(todos).eq(2).should('not.have.class', 'completed')

    // check the entire class attribute as a string
    cy.get(todos)
      .eq(1)
      .should('have.attr', 'class')
      .should('match', /completed/i)

    cy.get(todos)
      .eq(1)
      .should('have.prop', 'classList')
      .then(Array.from)
      .should('include', 'completed')
  })
})
