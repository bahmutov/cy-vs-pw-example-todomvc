// @ts-check
/// <reference types="cypress" />

describe('Todos', { viewportHeight: 1000 }, () => {
  beforeEach(function createRandomTodos() {
    const n = Cypress._.random(1, 10)
    cy.log(`Creating ${n} random todos`)
    cy.wrap(n).as('n')

    const todos = Cypress._.times(n, (i) => {
      return {
        id: Cypress._.random(1e5, 1e6),
        title: `Random todo ${i + 1}`,
        completed: false,
      }
    })
    cy.request('POST', '/reset', { todos })
  })

  it('are completed by checking the boxes', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)
    // complete all todos by clicking the checkboxes
    cy.get('.todo-list li .toggle').click({ multiple: true })
  })
})
