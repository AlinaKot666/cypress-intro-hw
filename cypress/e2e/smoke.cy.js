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

});