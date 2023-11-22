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
    // confirm the item labels
    // confirm the "3" todos remaining is shown
    // complete the first item by clicking its toggle element
    // the first item should have class "completed"
    // confirm the 2nd and the 3rd items do not have class "completed"
    // Bonus: can you confirm classes for all 3 elements at once
    // confirm there are 2 remaining items
    // and that we can clear the completed items button appears
  })
})
