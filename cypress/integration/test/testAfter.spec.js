/// <reference types="Cypress" />

describe('Test run execute promise in after method', () => {
  it('Test cannot execute after() in support/index.js', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress.html')
    cy.get('xxx').should('not.be.visible')
  })
})
