// Function to check if body is visible
function isVisible() {
  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })
}

describe('Project Github Profiles', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/github-profiles/index.html')
  })

  it('Opens the home page', () => {

  })

  it('The body is visible', () => {
    isVisible()
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        isVisible()
      })

      it('The background color is correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(42, 42, 114)')
      })

      context('The Search Bar', () => {
        context('Search bar', () => {
          it('The search bar is visible', () => {
            cy.xpath('//form[@class="user-form"]').should('be.visible')
          })

          it('The search bar has visible background color', () => {
            cy.xpath('//*[@id="search"]').should('be.visible').should('have.css', 'background-color', 'rgb(76, 40, 133)')
          })

          it('The search bar has visible placeholder text', () => {
            cy.xpath('//*[@id="search"]').should('be.visible').should('have.attr', 'placeholder', 'Search a Github User')
          })

          it('The search bar placeholder text has correct color', () => {
            cy.xpath('//*[@id="search"]').should('be.visible').should('have.attr', 'placeholder', 'Search a Github User').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The search bar is clickable', () => {
            cy.xpath('//form[@class="user-form"]').should('be.visible').click()
          })

          it('The user when enters a correct name gets the result', () => {
            cy.get('#search').should('be.visible').click().type('Hammad1007')
            cy.get('#form').submit()
            cy.get('.user-info').should('be.visible')
          })

          context('Correct User Card', () => {
            it('The card has correct background color', () => {
              cy.get('#search').should('be.visible').click().type('Hammad1007')
              cy.get('#form').submit()
              cy.wait(10)
              cy.get('.user-info').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            })

            context('Card', () => {
              context('Image', () => {
                it('The image of the user is visible', () => {
                  cy.get('#search').should('be.visible').click().type('Hammad1007')
                  cy.get('#form').submit()
                  cy.wait(10)
                  cy.xpath('/html/body/main/div/div[1]/img').should('be.visible')
                })
              })

              context('Text', () => {
                it('The card content is visible', () => {
                  cy.get('#search').should('be.visible').click().type('Hammad1007')
                  cy.get('#form').submit()
                  cy.wait(10)
                  cy.xpath('/html/body/main/div').should('be.visible')
                })

                context('Heading', () => {
                  it('The heading text is visible', () => {
                    cy.get('#search').should('be.visible').click().type('Hammad1007')
                    cy.get('#form').submit()
                    cy.wait(10)
                    cy.xpath('/html/body/main/div/div[2]/h2').should('be.visible')
                  })

                  it('The heading text is correct', () => {
                    cy.get('#search').should('be.visible').click().type('Hammad1007')
                    cy.get('#form').submit()
                    cy.wait(10)
                    cy.xpath('/html/body/main/div/div[2]/h2').should('be.visible').should('have.text', 'Hammad Rashid')
                  })

                  it('The color of the text is correct', () => {
                    cy.get('#search').should('be.visible').click().type('Hammad1007')
                    cy.get('#form').submit()
                    cy.wait(10)
                    cy.xpath('/html/body/main/div/div[2]/h2').should('be.visible').should('have.css', 'color', 'rgb(238, 238, 238)')
                  })
                })
              })
            })
          })

          context('Incorrect User Card', () => {
            it('Invalid input results in no result', () => {
              cy.get('#search').should('be.visible').click().type('qwerty')
              cy.get('#form').submit()
              cy.wait(10)
              cy.get('.user-info').should('not.be.visible')
            })
          })
        })
      })
    })
  })
})