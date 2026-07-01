describe('Part C: Basic Cypress Commands Suite', () => {
    it('should perform foundational element actions successfully', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#name').type('Jane Doe').clear();
      cy.get('#sunday').check().uncheck();
      cy.get('#country').select('United States');
      cy.get('.wikipedia-icon').trigger('mouseover');
      cy.get('#name').rightclick();
    });
  });
  