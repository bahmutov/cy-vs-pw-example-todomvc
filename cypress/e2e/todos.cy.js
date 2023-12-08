// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('inserts the first todo', () => {
    const todos = '.todo-list li'
    const title = 'The first one!'

    // spy on the "GET /todos" network call
    // before the request continues
    // delete the header "if-none-match" to avoid
    // the server responding with "304 Not Modified"
    // once the response arrives
    // confirm it is an array
    // and insert a new object at the first position
    // title, completed=false, id="1234"
    // https://on.cypress.io/intercept

    cy.visit('/')
    // confirm there is at least one todo
    // and the first todo element
    // has the title text
    // and has the class "todo"
    // and does not have class "completed"
  })
})
