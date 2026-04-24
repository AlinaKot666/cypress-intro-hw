describe('Registration', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/');
    cy.contains('Registration').click();
  });

  it('Should show errors for empty fields', () => {
    cy.contains('Register').click();

    cy.contains('Name required').should('be.visible');
    cy.contains('Last name required').should('be.visible');
    cy.contains('Email required').should('be.visible');
    cy.contains('Password required').should('be.visible');
  });

  it('Should validate email format', () => {
    cy.get('#signupEmail').type('invalidEmail');
    cy.contains('Email is incorrect').should('be.visible');
  });

  it('Should show error if passwords do not match', () => {
    cy.get('#signupPassword').type('Password123');
    cy.get('#signupRepeatPassword').type('Password124');

    cy.contains('Passwords do not match').should('be.visible');
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