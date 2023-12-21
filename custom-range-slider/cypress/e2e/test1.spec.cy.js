describe('Project: Custom Range Slider', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/custom-range-slider')
  })

  it('Opens the home page', () => {

  })

  it('Body Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('Background color', () => {
    const expectedGradient = /linear-gradient\(135deg,\s*rgb\(245,\s*247,\s*250\)\s*0%,\s*rgb\(195,\s*207,\s*226\)\s*100%\)/
  
    cy.get('body').should('have.css', 'background-image').and('match', expectedGradient)
  })

  context('Body', () =>{
    context('Title text', () => {
      it('Title text is visible', () => {
        cy.get('body').get('h2').should('be.visible')
      })
  
      it('Title Text is correct', () => {
        cy.get('body h2').should('be.visible').should('have.text', 'Custom Range Slider')
      })
    })
  
    context('Range Slider', () => {
      it('Range slider is visible', () => {
        cy.get('body .range-container').should('be.visible')
      })

      it('Range slider mid value is 50', () => {
        cy.get('label[for="range"]').should('be.visible')
      })

      it('Range slider start value is 0', () => {
        cy.get('#range').invoke('val', '0').trigger('input');
        cy.get('label[for="range"]').should('have.text', '0');
      })

      it('Range slider end value is 100', () => {
        cy.get('#range').invoke('val', '100').trigger('input');
        cy.get('label[for="range"]').should('have.text', '100');
      })

      it('Range slider has any value between 0 and 50 inclusive', () => {
        cy.get('#range').invoke('val', '29').trigger('input');
        cy.get('label[for="range"]').should('have.text', '29');
      })

      it('Range slider has any value between 0 and 100 inclusive', () => {
        cy.get('#range').invoke('val', '63').trigger('input');
        cy.get('label[for="range"]').should('have.text', '63');
      })

      it('Range slider does not have a value less than 0', () => {
        cy.get('#range').invoke('val', '-1').trigger('input');
        cy.get('label[for="range"]').should('not.have.text', '-1');
      })

      it('Range slider does not have a value greater than 100', () => {
        cy.get('#range').invoke('val', '101').trigger('input');
        cy.get('label[for="range"]').should('not.have.text', '101');
      })
    })
  })

})