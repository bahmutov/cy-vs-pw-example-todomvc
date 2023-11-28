// @ts-check
/// <reference types="cypress" />

import items from '../../fixtures/three.json'

// add a new Chai assertion "have.texts"
chai.use((_chai, utils) => {
  // use "function" syntax to make sure when Chai
  // calls it, the "this" object points at Chai

  function assertText(strings) {
    // first, confirm the number of elements is the same
    // as the number of expected strings
    this.assert(
      this._obj.length === strings.length,
      `expected to find ${strings.length} elements`,
    )

    // compare each string to the element inside jQuery object
    strings.forEach((s, k) => {
      // assume we want to normalize the whitespace around
      const expected = s.trim()
      const text = this._obj[k].innerText.trim()
      this.assert(
        text === expected,
        `element: ${k + 1} expected text **${expected}**, found **${text}**`,
      )
    })
  }

  _chai.Assertion.addMethod('texts', assertText)
})

describe('App', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: items })
    // visit the base url
  })

  it('shows the right labels', () => {
    // common locators
    const todos = '.todo-list li'

    // the application starts with 3 items

    // get the label from each item
    // and confirm the todos elements have the right text
    // alternative: use the bundled Lodash library

    // confirm the todo elements have the labels
    // from the fixture file
  })
})
