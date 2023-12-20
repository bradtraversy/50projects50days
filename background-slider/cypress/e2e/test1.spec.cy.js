describe('Project 4: Background Slider', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/background-slider')
  })

  it('Opens the home page', () => {
    
  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Image Slider', () => {
    it('Slider container is visible', () => {
      cy.get('.slider-container').should('be.visible')
    })

   context('Arrows', () => {
    it('Arrows are visible', () => {
      cy.get('.arrow').should('be.visible')
    })

    it('Color of arrows is white', () => {
      cy.get('.arrow').should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    context('Left Arrow', () => {
      it('Left arrow is visible', () => {
        cy.get('.fa-arrow-left ').should('be.visible')
      })

      it('Left arrow is clickable', () => {
        cy.get('.fa-arrow-left ').should('be.visible').click()
      })
    })

    context('Right Arrow', () => {
      it('Right arrow is visible', () => {
        cy.get('.fa-arrow-right ').should('be.visible')
      })

      it('Right arrow is clickable', () => {
        cy.get('.fa-arrow-right ').should('be.visible').click()
      })
    })
   })
  })
})