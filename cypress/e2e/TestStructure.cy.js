describe('Part A: Test Structure Suite', () => {
    beforeEach(() => {
      cy.visit('https://expandtesting.com');
    });
  
    it('should verify page element rendering within standard hooks', () => {
      cy.get('h1').should('be.visible');
    });
  });