describe('Project 3: Animated Countdown', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/animated-countdown/index.html')
  })
  it('Open the homepage', () => {
    
  })

  it('White Background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Get Ready text is visible', () => {
    cy.get('.counter').get('h4').should('have.text', 'Get Ready')
  })

  it('The countdown is visible', () => {
    
  })

  it('Go word is visible', () => {
    cy.get('.final').get('h1').should('have.text', 'GO')
  })

  it('Replay button', () => {
    cy.get('body').get('.counter').get('.nums').get('span').should('contain', 'Replay')
  })

})