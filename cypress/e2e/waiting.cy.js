describe('Part G: Deterministic Waiting Strategies Suite', () => {

    it('should execute asynchronous operations using lifecycle hooks', () => {
      cy.intercept('GET', '/**').as('networkBaseline');
      cy.visit('https://expandtesting.com');
      cy.wait('@networkBaseline');
  
      cy.get('#start button').click();
      cy.get('#finish', { timeout: 12000 }).should('be.visible').and('contain', 'Hello World');
    });
  
  });
  