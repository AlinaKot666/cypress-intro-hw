describe('Home page UI elements', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      },
      failOnStatusCode: false
    });

    cy.get('body').should('be.visible');
  });

  it('Should check Sign up button', () => {
    cy.contains('Sign up').should('be.visible');
  });

  it('Should check header buttons', () => {
    cy.get('header')
      .should('be.visible')
      .within(() => {
        cy.contains('Home').should('be.visible');
        cy.contains('About').should('be.visible');
        cy.contains('Contacts').should('be.visible');
        cy.contains('Guest log in').should('be.visible');
      });
  });

  it('Should check footer social icons', () => {
    cy.get('a[href*="facebook"]').should('exist');
    cy.get('a[href*="t.me"]').should('exist');
    cy.get('a[href*="youtube"]').should('exist');
    cy.get('a[href*="instagram"]').should('exist');
    cy.get('a[href*="linkedin"]').should('exist');
  });

  it('Should check footer contacts', () => {
    cy.contains('ithillel.ua').should('be.visible');
    cy.contains('support@ithillel.ua').should('be.visible');
  });

});