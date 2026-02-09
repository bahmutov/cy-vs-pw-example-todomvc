// @ts-check
/// <reference types="cypress" />

describe('Random todos', { viewportHeight: 1000 }, () => {
  beforeEach(function createRandomTodos() {
    // TODO: pass the number of created todos to the main test
    // Tip: use an alias that is immediately available inside the test context function
    // create `n` random todos and reset the app state with them
    // each todo should have a unique id (could be a number between 100000 and 999999)
    // and a title like "Random todo 1", "Random todo 2", etc.
    // and completed should be false
    // Tip: use "POST /reset" utility API endpoint
  })

  it('shows the expected number of todos', function () {
    const todos = '.todo-list li'
    cy.visit('/')
    // confirm the app shows the created number of todos
  })
})
