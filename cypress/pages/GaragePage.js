class GaragePage {

  openAddCar() {
    cy.contains('Add car').click()
  }

  fillCarForm() {
    cy.get('#addCarBrand').select('Audi')
    cy.get('#addCarModel').select('TT')
    cy.get('#addCarMileage').clear().type('120')
  }

  submitCar() {
    cy.get('ngb-modal-window')
      .contains('button', 'Add')
      .click()
  }

  addCar() {
    this.openAddCar()
    this.fillCarForm()
    this.submitCar()
  }

}

export default new GaragePage()