// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiRequest', (method, endpoint, options = {}) => {
    cy.request({
        method,
        url: `${Cypress.env('baseUrl') || 'https://gorest.co.in/'}${endpoint}`, failOnStatusCode: false,
        headers: {
            'Authorization': `Bearer bae9e92f71f75be72a70a13b43f8644f6fe686363f49c9df874e118fd1371831`,
            ...options.headers,
        },
        body: options.body,
        ...options,
    });
});