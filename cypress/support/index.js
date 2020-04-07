// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// This plugin makes fail on Cypress 4.3
import 'cypress-skip-and-only-ui/support'
// Alternatively you can use CommonJS syntax:
// require('./commands')
after(() => {
  callWithPromise()
  callWithPromise()
})

function callWithPromise() {
  cy.server()
  return cy
    .request({
      method: 'POST',
      url: 'https://play.google.com/log?format=json&hasfast=true',
      failOnStatusCode: false,
    })
    .then((xhr) => {
      return new Cypress.Promise((resolve, reject) => {
        resolve(xhr.body)
      })
    })
}