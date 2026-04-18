describe('Home page UI elements', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  it('Should check Sign up button', () => {
    cy.contains('Sign up').should('be.visible');
  });
it('Should check header buttons', () => {
  cy.get('header').within(() => {
    cy.contains('Home').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contacts').should('be.visible');
    cy.contains('Guest log in').should('be.visible');
    cy.contains('Sign up').should('be.visible');
  });
});

it('Should check footer social icons', () => {
  cy.get('footer').within(() => {
    cy.get('a[href*="facebook"]').should('exist');
    cy.get('a[href*="telegram"]').should('exist');
    cy.get('a[href*="youtube"]').should('exist');
    cy.get('a[href*="instagram"]').should('exist');
    cy.get('a[href*="linkedin"]').should('exist');
  });
});

it('Should check footer contacts', () => {
  cy.get('footer').within(() => {
    cy.contains('ithillel.ua').should('be.visible');
    cy.contains('support@ithillel.ua').should('be.visible');
  });
});
});