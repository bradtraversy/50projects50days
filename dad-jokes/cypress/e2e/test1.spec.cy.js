describe('Project: Dad Jokes', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/dad-jokes/index.html')
  })

  context('General Tests', () => {
    it('Opens the home page', () => {

    })

    it('Screen is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('Background color', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(104, 109, 224)')
    })
  })

  context('Body', () => {
    context('Title Text', () => {
      it('Title text is visible', () => {
        cy.get('body').get('.container h3').should('be.visible')
      })

      it('Title text is correct', () => {
        cy.get('body').get('.container h3').should('have.text', "Don't Laugh Challenge")
      })
    })
  })
})