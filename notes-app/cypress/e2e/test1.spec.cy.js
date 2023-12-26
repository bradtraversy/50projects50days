describe('Project: Notes-App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/notes-app')
  })

  it('Opens the Home Page', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Background-color', () => {

    it('Background color is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('Background color is correct', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(123, 218, 243)')
    })
  })

  context('Body', () => {
    context('Add Note Button', () => {
      it('The button is visible', () => {
        cy.get('body').get('.add').should('be.visible')
      })

      it('The color of the button is green', () => {
        cy.get('body .add').should('have.css', 'background-color', 'rgb(158, 200, 98)')
      })

      it('The button has correct text', () => {
        cy.get('button.add#add').invoke('text').invoke('trim').should('eq', 'Add note');
      })

      it('The plus sign is visible', () => {
        cy.get('button i').should('be.visible')
      })

      it('The color of the plus sign is white', () => {
        cy.get('button i').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
      })

      it('The button is clickable', () => {
        cy.get('body .add').should('be.visible').click()
      })

      it('The button when clicked opens a new note', () => {
        cy.get('body .add').should('be.visible').click()
        cy.get('.note').should('be.visible')
      })
    })
  })
})