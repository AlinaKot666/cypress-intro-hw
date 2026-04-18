describe('Smoke test', () => {
  it('Open main page', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})