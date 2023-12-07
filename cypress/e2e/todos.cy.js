// @ts-check
/// <reference types="cypress" />

describe('App', () => {
  it('stubs the load data network call three different ways', () => {
    const todos = '.todo-list li'

    // stub the "GET /todos" network call
    // on the first call return the data from the "fixtures/one.json" file
    // on the second call return the data from the "fixtures/two.json" file
    // on the third call return the data from the "fixtures/three.json" file
    // Tip: while you can write a callback that keeps the request count
    // to decide which fixture to return, you can also define a Cypress intercept
    // to work only a certain number of times
    // See the https://on.cypress.io/intercept options

    // load the page
    // and confirm only 1 todo is shown
    // reload the page
    // confirm there are 2 todos
    // reload the page
    // confirm there are 3 todos
    // reload the page one more time
    // and confirm the 3 todos are still there
  })
})
