describe('Part K: Simulated Keystroke Profiles Suite', () => {

    it('should process navigation key modifications accurately', () => {
      cy.visit('https://expandtesting.com');
  
      cy.get('#input-number').type('5').type('{uparrow}').should('have.value', '6');
      cy.get('#input-number').type('{downarrow}').should('have.value', '5');
      cy.get('#input-number').type('{backspace}').should('have.value', '');
    });
  
  });
  