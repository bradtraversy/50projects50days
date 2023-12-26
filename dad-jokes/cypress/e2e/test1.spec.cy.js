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

    context('Get Another Joke button', () => {
      it('Get Another Joke button is visible', () => {
        cy.get('.btn').should('be.visible')
      })
      
      it('Color of the button is correct', () => {
        cy.get('.btn').should('have.css', 'background-color', 'rgb(159, 104, 224)')
      })

      it('The button has the correct text displayed', () => {
        cy.get('.btn').should('have.text', 'Get Another Joke')
      })

      it('The button is clickable', () => {
        cy.get('.btn').should('be.visible').click()
      })
    })

    context('Joke', () => {
      it('Joke is visible', () => {
        cy.get('.container .joke#joke').should('be.visible')
      })

      it('Gets a new joke when the button is clicked', () => {
        cy.get('.btn').should('be.visible').click()
        cy.get('.container .joke#joke').should('be.visible')
      })
    })
  })
})