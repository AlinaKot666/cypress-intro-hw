Cypress.Commands.add('createExpense', (sid, carId) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formattedDate = tomorrow.toISOString().split('T')[0];

  cy.request({
    method: 'POST',
    url: 'https://qauto.forstudy.space/api/expenses',
    headers: {
      Cookie: sid
    },
    failOnStatusCode: false,
    body: {
      carId,
      expenseDate: formattedDate,
      mileage: 150,
      liters: 20,
      pricePerLitre: 1
    }
  }).then((response) => {
    cy.log(`STATUS: ${response.status}`);
    cy.log(JSON.stringify(response.body));
    console.log(response.body);
  });
});