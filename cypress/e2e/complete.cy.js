// @ts-check
/// <reference types="cypress" />

describe('Complete todos', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: [] })
  })

  it('completes a todo', () => {
    // common locators
    const input = '[placeholder="What needs to be done?"]'
    const todos = '.todo-list li'
    const todoLabels = todos + ' label'
    const count = '[data-cy="remaining-count"]'

    cy.visit('/')
    cy.get('body.loaded').should('be.visible')

    // enter three todos
    // "Write code", "Write tests", "Make tests pass"
    cy.get(input)
      .type('Write code{enter}')
      .type('Write tests{enter}')
      .type('Make tests pass{enter}')

    // confirm the item labels
    cy.get(todoLabels)
      .should('have.length', 3)
      .then(($el) => Cypress._.map($el, 'innerText'))
      .should('deep.equal', ['Write code', 'Write tests', 'Make tests pass'])
    // confirm the "3" todos remaining is shown
    cy.contains(count, 3)

    // complete the first item by clicking its toggle element
    cy.get(todos).first().find('.toggle').click()
    // the first item should have class "completed"
    cy.get(todos).first().should('have.class', 'completed')
    // confirm the 2nd and the 3rd items do not have class "completed"
    cy.get(todos).eq(1).should('not.have.class', 'completed')
    cy.get(todos).eq(2).should('not.have.class', 'completed')
    // Bonus: can you confirm classes for all 3 elements at once
    cy.get(todos)
      .then(($el) => Cypress._.map($el, 'classList.value'))
      .should('deep.equal', ['todo completed', 'todo', 'todo'])
    // confirm there are 2 remaining items
    cy.contains(count, 2)
    // and that we can clear the completed items button appears
    cy.contains('button', 'Clear completed').should('be.visible')
  })
})
