describe('Project 6: Content Placeholder', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/content-placeholder')
  })

  it('Opens the home page', () => {

  })

  it('Body is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(236, 240, 241)')
  })

})