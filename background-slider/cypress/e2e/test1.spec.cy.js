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

      it('Left arrow when clicked takes me to the previous image', () => {
        cy.get('.fa-arrow-left ').should('be.visible').click()
        cy.get('.slide').should('have.class', 'active').should('be.visible')
      })

    })

    context('Right Arrow', () => {
      it('Right arrow is visible', () => {
        cy.get('.fa-arrow-right ').should('be.visible')
      })

      it('Right arrow is clickable', () => {
        cy.get('.fa-arrow-right ').should('be.visible').click()
      })

      it('Right arrow when clicked takes me to the next image', () => {
        cy.get('.fa-arrow-right ').should('be.visible').click()
        cy.get('.slide').should('have.class', 'active').should('be.visible')
      })

    })
   })
  })

  context('Background Image', () => {
    it('Verifies the background image of the first slide', () => {
      cy.get('.slide').first().should('have.css', 'background-image')
        .and('include', 'photo-1549880338-65ddcdfd017b')
    })

    it('Verifies the background image of the second slide', () => {
      cy.get('.slide').eq(1).should('have.css', 'background-image')
        .and('include', 'photo-1511593358241-7eea1f3c84e5')
    })

    it('Verifies the background image of the third slide', () => {
      cy.get('.slide').eq(2).should('have.css', 'background-image')
        .and('include', 'photo-1495467033336-2effd8753d51')
    })

    it('Verifies the background image of the fourth slide', () => {
      cy.get('.slide').eq(3).should('have.css', 'background-image')
        .and('include', 'photo-1522735338363-cc7313be0ae0')
    })

    it('Verifies the background image of the fifth slide', () => {
      cy.get('.slide').last().should('have.css', 'background-image')
        .and('include', 'photo-1559087867-ce4c91325525')
    })
  })
})