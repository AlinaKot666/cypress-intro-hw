import garagePage from '../pages/GaragePage'

describe('Garage flow', () => {

  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    })

    const email = `test${Date.now()}@test.com`
    const password = 'Password123!'

    cy.contains('Sign up').click()

    cy.get('#signupName').type('Test')
    cy.get('#signupLastName').type('User')
    cy.get('#signupEmail').type(email)
    cy.get('#signupPassword').type(password)
    cy.get('#signupRepeatPassword').type(password)

    cy.contains('button', 'Register').click()

    cy.url().should('include', '/panel/garage')
  })


  it('Add car', () => {

    garagePage.addCar()

    cy.get('ngb-modal-window').should('not.exist')

    cy.contains('Audi TT').should('exist')
  })


  it('Add fuel expense', () => {

    // сначала машина (через POM)
    garagePage.addCar()

    cy.get('ngb-modal-window').should('not.exist')

    // затем топливо
    cy.contains('Add fuel expense').click()

    cy.get('ngb-modal-window').should('be.visible')

    cy.get('#addExpenseMileage').type('200')
    cy.get('#addExpenseLiters').type('20')
    cy.get('#addExpenseTotalCost').type('500')

    cy.get('ngb-modal-window')
      .contains('button', 'Add')
      .click()

    cy.get('ngb-modal-window').should('not.exist')

    cy.contains('500').should('exist')
  })

})