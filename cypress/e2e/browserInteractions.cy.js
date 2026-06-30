describe('Part J: Browser Pipeline Executions Suite', () => {

    it('should evaluate system level navigation and windows prompts', () => {
      cy.visit('https://expandtesting.com');
      cy.get('#input-number').type('55');
      cy.reload();
      cy.get('#input-number').should('have.value', '');
  
      cy.visit('https://expandtesting.com');
      cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();
      cy.url().should('include', '/windows/new');
  
      cy.visit('https://expandtesting.com');
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Alert');
      });
      cy.contains('Click for JS Alert').click();
  
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('I am a JS Confirm');
        return true;
      });
      cy.contains('Click for JS Confirm').click();
  
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress Prompt Automated Answer');
      });
      cy.contains('Click for JS Prompt').click();
    });
  
  });
  