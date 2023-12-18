describe('Project 4: Animated Navigation', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/animated-navigation')
  })

  it('Opens the browser', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Checks for the background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(235, 251, 255)')
  })

  it('Checks for the linear gradient color on the screen', () => {
    cy.get('body').should('have.css', 'background-image').and('contain', 'linear-gradient')
  })

  it('Checks for the current linear gradient colors', () => {
    cy.get('body').should(($element) => {
      const gradient = $element.css('background-image');
      expect(gradient).to.include('rgb(234, 251, 255)');
      expect(gradient).to.include('rgb(82, 144, 249)');
    });
  })

  it('Navbar is visible', () => {
    cy.get('body').get('#nav').should('be.visible')
  })

  it('Navbar background color', () => {
    cy.get('body').get('nav#nav.active').should(($element) => {
      const bgcolor = $element.css('background-color');
      expect(bgcolor).to.include('rgb(255, 255, 255)');
    });
  })

  it('Cross icon is visible to close the navbar', () => {
    cy.get('body').get('#toggle').should('be.visible')
  })

  it('Cross icon is clickable', () => {
    cy.get('body').get('#toggle').should('be.visible').click()
  })

  it('The navbar should have the 4 headings visible', () => {
    cy.get('.active ul li a').should('have.length', 4)
    cy.get('.active ul li a').each(($link) => {
      cy.wrap($link).should('be.visible') 
    });
  })

})