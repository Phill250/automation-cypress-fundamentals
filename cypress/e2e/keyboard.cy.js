describe('Part K: Simulated Keystroke Profiles Suite', () => {
    it('should process navigation key modifications accurately', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
    
      cy.get('#name').type('TestingKeys').type('{backspace}').should('have.value', 'TestingKey');
    });
  });
  