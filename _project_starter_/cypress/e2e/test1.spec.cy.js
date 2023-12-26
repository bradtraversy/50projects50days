describe('Project 1: Project Starter', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/_project_starter_/')
  })

  it('Opens the Home Page', () => {

  })

  it('White Background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Text is visible', () => {
    cy.get('h1').should('have.text', 'Project Starter')
  })
  
})