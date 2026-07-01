describe('Part J: Browser Pipeline Executions Suite', () => {
    it('should evaluate system level navigation and windows prompts', () => {
        cy.visit('https://testautomationpractice.blogspot.com/', { 
            timeout: 60000,
            failOnStatusCode: false,
            onBeforeLoad(win) {
              delete win.navigator.serviceWorker;
            }
          });
      cy.get('#name').type('Testing Reload');
      cy.reload();
      cy.get('#name').should('have.value', '');
  
      cy.get('button[onclick="myFunctionAlert()"]').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am an alert box!');
      });
  
      cy.get('button[onclick="myFunctionConfirm()"]').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Press a button!');
        return true;
      });
    });
  });
  