Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('My First click', () => {
  it('finds the content "Notes"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('DASHBOARD')
  })
})

describe('My First clicking test', () => {
  it('clicks the link "Add target"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('map').click()
  })
})