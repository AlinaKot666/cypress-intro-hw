Cypress.Commands.add('createExpense', (sid, carId) => {

  cy.request({

    method: 'POST',

    url: 'https://qauto.forstudy.space/api/expenses',

    headers: {
      Cookie: sid
    },

    body: {
      carId: carId,
      reportedAt: '2026-05-07',
      mileage: 150,
      liters: 20,
      totalCost: 100
    }

  })

})