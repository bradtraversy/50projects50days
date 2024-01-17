describe('Project Theme Clock', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/theme-clock/index.html')
  })

  it('Opens the homepage', () => {

  })

  it('The screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background has correct color', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      })
    })

    context('Content', () => {
      it('The clock container is visible', () => {
        cy.get('.clock-container').should('be.visible')
      })

      context('Clock', () => {
        it('The clock container has the clock displayed', () => {
          cy.get('.clock-container .clock').should('be.visible')
        })

        context('Needles', () => {

          it('The clock container has the hour needle', () => {
            cy.get('.clock-container .clock .needle.hour').should('be.visible')
          })

          it('The clock container has the minute needle', () => {
            cy.get('.clock-container .clock .needle.minute').should('be.visible')
          })

          it('The clock container has the second needle', () => {
            cy.get('.clock-container .clock .needle.second').should('be.visible')
          })

          it('The clock container has the center point', () => {
            cy.get('.center-point').should('be.visible')
          })
        })

        context('Text Time', () => {
          it('The time is being displayed in text format as well', () => {
            cy.get('.time').should('be.visible')
          })
  
          it('The current time is being displayed', () => {
            const currentTime = new Date()
            var hours = currentTime.getHours()
            const minutes = currentTime.getMinutes()
            const meridiem = hours >= 12 ? 'PM' : 'AM'
  
            hours = hours % 12 || 12;
  
            const formattedTime = `${hours}:${minutes} ${meridiem}`;
  
            cy.get('.time').should('have.text', formattedTime);
          })
        })

        context('Day, month, date', () => {
          it('The date is visible', () => {
            cy.get('.date').should('be.visible')
          })

          it('The date, month and day is visible', () => {
            const currentDate = new Date();
            const day = currentDate.getDay();
            const month = currentDate.getMonth();
            const date = currentDate.getDate();

            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            cy.get('.date').should('have.text', `${days[day]}, ${months[month]} ${date}`);
          })
        })
      })
    })
  })
})