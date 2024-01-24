// @ts-check
/// <reference types="cypress" />

import todos from '../../fixtures/two-items.json'

// how would you ensure that these tests run one after another
// and do not go to the blank page in between?
describe('Completing todos', () => {
  before(() => {
    // confirm there are more than 1 todos
    expect(todos).to.have.length.greaterThan(1)
    cy.request('POST', '/reset', { todos })
  })

  it('shows the list of todos', () => {
    cy.visit('/')
    // confirm the number of todos shown
    cy.log('**all todos are active**')
    // confirm the all todos are active (do not have class completed)
    // there should be no completed todos
  })

  it('completes the first todo', () => {
    // find the first todo and click on its ".toggle" button
    // the first todo should get the class "completed"
  })

  it('clears completed todos', () => {
    // click on the button with the text "Clear completed"
    // the number of todos should go down by 1
    // there should be no completed todos
  })
})
