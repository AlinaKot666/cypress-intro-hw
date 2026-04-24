describe('Registration', () => {

  beforeEach(() => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

  cy.contains('Sign In').click();
  cy.contains('Registration').click();
});

  it('Should register successfully', () => {
    const email = `test${Date.now()}@mail.com`;

    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Doe');
    cy.get('#signupEmail').type(email);
    cy.get('#signupPassword').type('Password123');
    cy.get('#signupRepeatPassword').type('Password123');

    cy.contains('Register').click();

    cy.url().should('include', 'garage');
  });

});