describe('Project: Todo List', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/todo-list/')
  })

  it ('Opens the home page', () => {
    
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
        cy.get('body').should('have.css', 'background-color', 'rgb(245, 245, 245)')
      })

      context('Heading', () => {
        it('The heading is visible', () => {
          cy.get('body h1').should('be.visible')
        })

        it('The heading has correct text', () => {
          cy.get('body h1').should('have.text', 'todos')
        })

        it('The heading text has the correct color', () => {
          cy.get('body h1').should('have.css', 'color', 'rgb(179, 131, 226)')
        })
      })

      context('ToDo List', () => {
        it('The todo list bar is visible', () => {
          cy.get('#form').should('be.visible')
        })

        it('The placeholder text is visible', () => {
          cy.get('#form .input').should('be.visible')
        })

        // Test for placeholder text
        it('The placeholder text is correct', () => {
          cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Enter your todo')
        })

        it('The text field is clickable', () => {
          cy.get('#form .input').should('be.visible').click()
        })

        it('Type some data in the textfield', () => {
          cy.get('#form .input').should('be.visible').click().type('Hello world, how are you?').type('{enter}')
        })

        it('The entry is listed below and visible', () => {
          cy.get('#form .input').should('be.visible').click().type('Hello world, how are you?').type('{enter}')
          cy.get('.todos').should('be.visible')
        })
      })

      context('Text below the Todos List', () => {
        it('The text is visible', () => {
          cy.get('body small').should('be.visible')
        })

        it('The color of the text is correct', () => {
          cy.get('small').should('have.css', 'color', 'rgb(181, 181, 181)')
        })

        context('Left and Right Click', () => {
          context('Left Click', () => {
            it('The Left Click text is corect', () => {
              cy.get('body small').contains('Left click to toggle completed.').should('be.visible')
            })

            it('Left click to toggle completed', () => {
              cy.get('#form .input').should('be.visible').click().type('Hello world, how are you?').type('{enter}')
              cy.get('.todos').click() 
              cy.get('.todos .completed').should('be.visible').click()
              cy.get('.todos').should('be.visible')
            })
          })
         
          context('Right Click', () => {
            it('The Right Click text is correct', () => {
              cy.get('body small').contains('Right click to delete todo').should('be.visible')
            })

            it('Right click whe clicked deletes a todo', () => {
              cy.get('#form .input').should('be.visible').click().type('Hello world, how are you?').type('{enter}')
              cy.contains('.todos li', 'Hello world, how are you?').rightclick()
              cy.contains('.todos li', 'Hello world, how are you?').should('not.exist')
            })
          })
        })
      })
    })
  })
})