describe('Project: Notes-App', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/notes-app')
  })

  it('Opens the Home Page', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {

    context('Background-color', () => {
      it('Background color is visible', () => {
        cy.get('body').should('be.visible')
      })
  
      it('Background color is correct', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(123, 218, 243)')
      })
    })
  
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
        cy.get('body .add').should('be.visible').click()  // checks if the note is visible or not too
        cy.get('.note').should('be.visible')
      })

      context('New Note', () => {
        it('The user is able to write in the note', () => {
          cy.get('body .add').should('be.visible').click() 
          cy.get('.note').should('be.visible').type('Hello world, how are you?')
        })

        it('The note accepts multi line input as well', () => {
          cy.get('body .add').should('be.visible').click() 
          cy.get('.note').should('be.visible').type('Hello world, how are you?').type('{enter}').type('The world says that it is fine.')
        })

        it('The user is able to delete characters with the help of backspace', () => {
          cy.get('body .add').should('be.visible').click() 
          cy.get('.note').should('be.visible').type('Hello world, how are you?').type('{enter}').type('The world says that it is fine.')
          .type('{backspace}').type('{backspace}').type('{backspace}').type('{backspace}').type('{backspace}')
        })

        context('Notepad buttons', () => {
          beforeEach(() => {
            cy.get('body .add').should('be.visible').click() 
            cy.get('.note').should('be.visible')
          })

          context('Save the text button', () => {
            it('The button is visible', () => {
              cy.get('.edit').should('be.visible')
            })

            it('The button is clickable', () => {
              cy.get('.edit').should('be.visible').click()
            })

            it('The toggle button to edit and save the text', () => {
              cy.get('.note').should('be.visible').type('Hello world, how are you?')

              cy.get('.edit').should('be.visible').click()
              cy.get('.note textarea').should('not.be.visible')

              cy.get('.edit').should('be.visible').click()
              cy.get('.note textarea').should('be.visible')
            })
          })

          context('Delete the note button', () => {
            it('The button is visible', () => {
              cy.get('.delete').should('be.visible')
            })

            it('The button is clickable', () => {
              cy.get('.delete').should('be.visible').click()
            })

            it('The button when clicked deletes the note from the screen', () => {
              cy.get('.note').its('length').then((initialNoteCount) => {
                cy.get('.note:first-of-type .delete').click()
                cy.get('.note').should('have.length', initialNoteCount - 1)
              })
            })
          })
        })
      })
    })
  })
})