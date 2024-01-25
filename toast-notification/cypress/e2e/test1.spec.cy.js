describe('Project Toast Notification', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/toast-notification/index.html')
  })

  it('Opens the homepage', () => {

  })

  it('The screen is visble', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background color is correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
      })
    })

    context('Content', () => {
      context('Button', () => {
        it('The button is visible', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible')
        })

        it('The button has correct background color', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible')
          .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        it('The text in the button is visible', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible')
          .invoke('text').should('exist')
        })

        it('The text is correct', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible')
          .invoke('text').should('include', 'Show Notification')
        })

        it('The text has correct color', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible')
          .should('have.css', 'color', 'rgb(102, 51, 153)')
        })

        it('The button is clickable', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible').click()
        })

        it('When I click on the button, it generates notification messages on the bottom', () => {
          cy.xpath('//button[@class="btn"]').should('be.visible').click()
          cy.get('.toast').should('have.length.gt', 0);
          cy.wait(10000);
          cy.get('.toast').should('have.length', 0);
        })
      })
    })
  })
})