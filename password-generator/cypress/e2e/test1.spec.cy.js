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

        context('Container Settings', () => {
          it('The container is visible', () => {
            cy.get('.settings').should('be.visible')
          })
          context('Password Length', () => {
            it('The password length text is visible', () => {
              cy.contains('Password Length').should('be.visible')
            })

            it('The password length text is correct', () => {
              cy.contains('Password Length').should('have.text', 'Password Length')
            })

            it('The password input field has value', () => {
              cy.get('#length').should('have.value', '20')
            })

            it('The minimum value is 4 and maximum value is 20',  () => {
              cy.get('#length').clear().type('4').blur()
              cy.get('#length').type('{downarrow}').should('have.value', '4')
              cy.get('#length').clear().type('20').blur()
              cy.get('#length').type('{uparrow}').should('have.value', '20')
            })

            it('The text field accepts any value between 4 and 20', () => {
              cy.get('#length').clear()
              cy.get('#length').type('10').should('have.value', '10')
            })
          })

          context('Include Uppercase Letters', () => { 
            it('The Include upper case letters is visible', () => {
              cy.contains('Include uppercase letters').should('be.visible')
            })

            it('The Include upper case letters text is correct', () => {
              cy.contains('Include uppercase letters').should('have.text', 'Include uppercase letters')
            })

            context('Include uppercase letters checkbox', () => {
              it('The checkbox is visible', () => {
                cy.get('#uppercase').should('be.visible')
              })

              it('The checkbox is a toggle button', () => {
                cy.get('#uppercase').should('be.visible').click().should('not.be.checked')
                cy.get('#uppercase').should('be.visible').click().should('be.checked')
              })
            })
          })

          context('Include Lowercase Letters', () => { 
            it('The Include lower case letters is visible', () => {
              cy.contains('Include lowercase letters').should('be.visible')
            })

            it('The Include lower case letters text is correct', () => {
              cy.contains('Include uppercase letters').should('have.text', 'Include uppercase letters')
            })

            context('Include uppercase letters checkbox', () => {
              it('The checkbox is visible', () => {
                cy.get('#lowercase').should('be.visible')
              })

              it('The checkbox is a toggle button', () => {
                cy.get('#lowercase').should('be.visible').click().should('not.be.checked')
                cy.get('#lowercase').should('be.visible').click().should('be.checked')
              })
            })
          })

          context('Include Numbers', () => { 
            it('The Include numbers is visible', () => {
              cy.contains('Include numbers').should('be.visible')
            })

            it('The Include numbers text is correct', () => {
              cy.contains('Include numbers').should('have.text', 'Include numbers')
            })

            context('Include numbers checkbox', () => {
              it('The checkbox is visible', () => {
                cy.get('#numbers').should('be.visible')
              })

              it('The checkbox is a toggle button', () => {
                cy.get('#numbers').should('be.visible').click().should('not.be.checked')
                cy.get('#numbers').should('be.visible').click().should('be.checked')
              })
            })
          })

          context('Include Special Characters', () => { 
            it('The Include special characters is visible', () => {
              cy.contains('Include symbols').should('be.visible')
            })

            it('The Include symbols text is correct', () => {
              cy.contains('Include symbols').should('have.text', 'Include symbols')
            })

            context('Include symbols checkbox', () => {
              it('The checkbox is visible', () => {
                cy.get('#symbols').should('be.visible')
              })

              it('The checkbox is a toggle button', () => {
                cy.get('#symbols').should('be.visible').click().should('not.be.checked')
                cy.get('#symbols').should('be.visible').click().should('be.checked')
              })
            })
          })
        })
      })

      context('Generate Password', () => {
        it('The button is visible', () => {
          cy.get('#generate').should('be.visible')
        })

        it('The background color', () => {
          cy.get('#generate').should('have.css', 'background-color', 'rgb(59, 59, 152)')
        })

        context('Generate Password text', () => {
          it('The text is visible', () => {
            cy.get('#generate').contains('Generate Password')
          })
        })

        it('The button is clickable', () => {
          cy.get('#generate').should('be.visible').click()
        })

        it('Generates a random password when the button is clicked', () => {
          cy.get('#generate').should('be.visible').click()
          cy.get('#result').should('not.have.text', ' ')
        })
      })
    })
  })
})