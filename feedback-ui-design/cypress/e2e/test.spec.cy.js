describe('Project Feedback UI Design', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/feedback-ui-design/index.html')
  })

  it('Opens the home page', () => {

  })

  it('The screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    it('The body is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('The background color of the body is visible', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(254, 249, 242)')
    })

    context('Content Container', () => {
      it('The container is visible', () => {
        cy.get('.panel-container').should('be.visible')
      })

      it('The container has the correct background color', () => {
        cy.get('.panel-container').should('be.visible')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      })

      context('Title Text', () => {
        it('The text is visible', () => {
          cy.get('strong').should('be.visible')
        })

        it('The text is correct', () => {
          cy.get('strong').should('be.visible').invoke('text').then((text) => {
            const expectedText = 'How satisfied are you with our customer support performance?'
            expect(text.replace(/\s+/g, ' ').trim()).to.include(expectedText)
          })
        })

        it('The text color is correct', () => {
          cy.get('strong').should('be.visible')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Emojis', () => {
        it('The emojis section is visible', () => {
          cy.xpath('/html/body/div[1]/div').should('be.visible')
        })

        context('Unsatisfied Emoji', () => {
          it('The emoji section is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[1]').should('be.visible')
          })

          it('The emoji is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[1]/img').should('be.visible')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[1]/small').should('be.visible')
          })

          it('The text is correct', () => {
            cy.xpath('/html/body/div[1]/div/div[1]/small').should('be.visible')
            .should('have.text', 'Unhappy')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/div[1]/div/div[1]/small').should('be.visible')
            .should('have.css', 'color', 'rgb(85, 85, 85)')
          })

          it('The emoji is clickable', () => {
            cy.xpath('/html/body/div[1]/div/div[1]').should('be.visible').click()
          })
        })

        context('Neutral Emoji', () => {
          it('The emoji section is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible')
          })

          it('The emoji is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[2]/img').should('be.visible')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[2]/small').should('be.visible')
          })

          it('The text is correct', () => {
            cy.xpath('/html/body/div[1]/div/div[2]/small').should('be.visible')
            .should('have.text', 'Neutral')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/div[1]/div/div[2]/small').should('be.visible')
            .should('have.css', 'color', 'rgb(85, 85, 85)')
          })

          it('The emoji is clickable', () => {
            cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
          })
        })

        context('Satisfied Emoji', () => {
          it('The emoji section is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[3]').should('be.visible')
          })

          it('The emoji is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[3]/img').should('be.visible')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[3]/small').should('be.visible')
          })

          it('The text is correct', () => {
            cy.xpath('/html/body/div[1]/div/div[3]/small').should('be.visible')
            .should('have.text', 'Satisfied')
          })

          it('The text has correct color', () => {
            cy.xpath('/html/body/div[1]/div/div[3]/small').should('be.visible')
            .should('have.css', 'color', 'rgb(17, 17, 17)')
          })

          it('The emoji is clickable', () => {
            cy.xpath('/html/body/div[1]/div/div[3]').should('be.visible').click()
          })
        })
      })

      context('Send Review Button', () => {
        it('The button is visible', () => {
          cy.xpath('//*[@id="send"]').should('be.visible')
        })

        it('The button background is correct', () => {
          cy.xpath('//*[@id="send"]').should('be.visible')
          .should('have.css', 'background-color', 'rgb(48, 45, 43)')
        })

        it('The button has text visible', () => {
          cy.xpath('//*[@id="send"]').should('be.visible').invoke('text')
          .should('include', 'Send Review')
        })
      })

      context('Functionality', () => {
        it('The functionality works', () => {
          cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
          cy.xpath('//*[@id="send"]').should('be.visible').click()
          cy.xpath('//*[@id="panel"]').should('be.visible')
        })

        context('Panel Section', () => {
          it('The panel is visible', () => {
            cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
            cy.xpath('//*[@id="send"]').should('be.visible').click()
            cy.xpath('//*[@id="panel"]').should('be.visible')
          })

          context('Heart Icon', () => {
            it('The icon is visible', () => {
              cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
            cy.xpath('//*[@id="send"]').should('be.visible').click()
            cy.xpath('//*[@id="panel"]').should('be.visible')
              cy.xpath('/html/body/div[1]/i').should('be.visible')
            })
          })

          context('Text', () => {
            context('Thank You Text', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[1]').should('be.visible')
              })

              it('The text has correct text', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[1]').should('be.visible')
                .should('have.text', 'Thank You!')
              })

              it('The text color is correct', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[1]').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
              })
            })

            context('Feedback Text', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[2]').should('be.visible')
              })

              it('The text is correct', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[2]').should('be.visible').should('have.text', 'Feedback: Neutral')
              })

              it('The text has correct color', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/strong[2]').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
              })
            })

            context('Use Feedback text', () => {
              it('The text is visible', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/p').should('be.visible')
              })

              it('The text is correct', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/p').should('be.visible').should('have.text', 'We\'ll use your feedback to improve our customer support')
              })

              it('The text has correct color', () => {
                cy.xpath('/html/body/div[1]/div/div[2]').should('be.visible').click()
                cy.xpath('//*[@id="send"]').should('be.visible').click()
                cy.xpath('//*[@id="panel"]').should('be.visible')
                cy.xpath('/html/body/div[1]/p').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
              })
            })
          })
        })
      })
    })
  })
})