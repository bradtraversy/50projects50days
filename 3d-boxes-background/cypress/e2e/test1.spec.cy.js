describe('Project 2: 3d-Boxes-Background', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/3d-boxes-background/')
  })

  it('Opens the Home Page', () => {

  })

  it('White Background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(250, 250, 250)')
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  
})