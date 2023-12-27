describe('Project: Password Generator', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/password-generator/')
  })

  it('Opens the home page', () => {
    
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('Background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('Background color is correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(59, 59, 152)')
      })
    })

    context('Password Generator', () => {
      it('The container is visible', () => {
        cy.get('.container').should('be.visible')
      })

      it('The container has the correct background color', () => {
        cy.get('.container').should('have.css', 'background-color', 'rgb(35, 35, 91)')
      })

      context('Password Generator Heading', () => {
        it('The heading is visible', () => {
          cy.get('.container h2').should('be.visible')
        })

        it('The heading is correct', () => {
          cy.get('.container h2').should('have.text', 'Password Generator')
        })

        it('The color of he heading is black', () => {
          cy.get('.container h2').should('have.css', 'color', 'rgb(255, 255, 255)')
        })
      })

      context('Password Generator Container', () => {
        it('The text field is visible', () => {
          cy.get('.result-container').should('be.visible')
        })

        it('The text field has correct color', () => {
          cy.get('.result-container').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.4)')
        })

        context('Copy to clipboard button', () => {
          it('The copy button is visible', () => {
            cy.get('.btn#clipboard').should('be.visible')
          })

          it('The copy button has the desired background color', () => {
            cy.get('.btn#clipboard').should('have.css', 'background-color', 'rgb(59, 59, 152)')
          })

          context('Copy Icon', () => {
            it('The icon is visible', () => {
              cy.get('.btn#clipboard i').should('be.visible')
            })

            it('The icon has correct color', () => {
              cy.get('.btn#clipboard i').should('have.css', 'color', 'rgb(255, 255, 255)')
            })
          })
        })
      })
    })
  })
})