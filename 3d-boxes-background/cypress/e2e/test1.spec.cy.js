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

  it('Magic Button is visible', () => {
    cy.get('.magic').should('be.visible')
  })

  it('Magic Button is clickable', () => {
    cy.get('.magic').should('be.visible').click()
  })

  it('Small Boxes are visible on the screen', () => {
    cy.get('.boxes').should('be.visible')
  })

  it('Magic button when clicked, the boxes merge into one box', () => {
    cy.get('.magic').should('be.visible').click()
    cy.get('.box').should('be.visible')
  })
  
  context('Magic Button toggle', () => {
    before(() => {
      cy.visit('http://127.0.0.1:5500/3d-boxes-background/')
      cy.get('.magic').should('be.visible').click()
      cy.get('.box').should('be.visible')
      
    })
  
    it('If Magic button is toggled, then the box changes to small boxes', () => {
      cy.get('.magic').should('be.visible').click()
      cy.get('.boxes').should('be.visible')
    })
  })

})