// @ts-check
/// <reference types="cypress" />
import { recurse } from 'cypress-recurse'
import 'cypress-map'

describe('Todos', { viewportHeight: 1000 }, () => {
  beforeEach(function createRandomTodos() {
    const n = Cypress._.random(1, 3)
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
    // save created ids for later
    cy.wrap(todos.map((t) => t.id)).as('ids')
  })

  // flake
  it.skip('are completed by checking the boxes', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)
    // complete all todos by clicking the checkboxes
    cy.get('.todo-list li .toggle').click({ multiple: true })

    // confirm all todos are done
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')

    // confirm all todos are marked as completed
    // after reloading the page
    cy.reload()
    cy.get('.loaded')
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')
  })

  it('are completed by checking the boxes (N network calls)', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)

    cy.intercept('PATCH', '/todos/*').as('updateTodo')

    // complete all todos by clicking the checkboxes
    cy.get('.todo-list li .toggle').click({ multiple: true })

    // confirm all network calls have finished
    cy.get('@updateTodo.all').should('have.length', this.n)

    // confirm all todos are marked as completed
    // after reloading the page
    cy.reload()
    cy.get('.loaded')
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')
  })

  it('are completed by checking the boxes (one at a time)', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)

    cy.intercept('PATCH', '/todos/*').as('updateTodo')

    cy.get('.todo-list li .toggle').each(($el) => {
      cy.wrap($el, { log: false }).check()
      // confirm a single network call has finished successfully
      cy.wait('@updateTodo')
        .its('response')
        .should('have.property', 'statusCode', 200)
    })

    // confirm all todos are marked as completed
    // after reloading the page
    cy.reload()
    cy.get('.loaded')
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')
  })

  it('are completed by checking the boxes (check the backend)', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)

    cy.get('.todo-list li .toggle').each(($el) => {
      cy.wrap($el, { log: false }).check()
    })

    // confirm the backend has only completed todos
    recurse(
      () => cy.request('/todos').its('body'),
      (todos) =>
        todos.every(
          (/** @type {{ completed: boolean }} */ todo) => todo.completed,
        ),
      {
        log: 'All todos are completed on the server',
        timeout: 30_000,
        delay: 1000,
      },
    )

    // confirm all todos are marked as completed
    // after reloading the page
    cy.reload()
    cy.get('.loaded')
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')
  })

  it('are completed by checking the boxes (collect their ids)', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    cy.get(todos).should('have.length', this.n)

    cy.intercept('PATCH', '/todos/*').as('updateTodo')
    cy.get('.todo-list li .toggle')
      .mapChain((/** @type {jQuery<HTMLElement>} */ $el) => {
        cy.wrap($el, { log: false }).check()
        // from each network call, grab the id of the updated todo
        cy.wait('@updateTodo').its('response.body.id')
      })
      .should('deep.equal', this.ids)

    // confirm all todos are marked as completed
    // after reloading the page
    cy.reload()
    cy.get('.loaded')
    cy.get('[data-cy="remaining-count"]').should('have.text', '0')
  })
})
