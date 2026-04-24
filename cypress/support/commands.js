Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://qauto.forstudy.space/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    }
  });

  cy.contains('Sign In').click();

  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password);

  cy.contains('Login').click();
});