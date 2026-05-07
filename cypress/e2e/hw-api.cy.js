it('Verify expense in UI', () => {

  // ===== LOGIN API =====
  cy.request({

    method: 'POST',

    url: 'https://qauto.forstudy.space/api/auth/signin',

    body: {
      email: 'alina.test123@gmail.com',
      password: 'Qwerty123!'
    }

  }).then((loginResponse) => {

    const sid = loginResponse.headers['set-cookie']

    // ===== CREATE CAR =====
    cy.request({

      method: 'POST',

      url: 'https://qauto.forstudy.space/api/cars',

      headers: {
        Cookie: sid
      },

      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 100
      }

    }).then((carResponse) => {

      const carId = carResponse.body.data.id

      // ===== CREATE EXPENSE =====
      cy.createExpense(sid, carId)

      // ===== OPEN UI =====
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')

      // ===== OPEN EXPENSES PAGE =====
      cy.contains('Fuel expenses').click()

      // ===== CHECK EXPENSE =====
      cy.contains('100')

      cy.contains('20')

      cy.contains('150')

    })

  })

})