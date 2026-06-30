describe('Part C: Basic Cypress Commands Suite', () => {

    it('should perform foundational element actions', () => {
      cy.visit('https://expandtesting.com');
      cy.get('#input-number').type('100');
      cy.get('#input-number').clear();
  
      cy.visit('https://expandtesting.com');
      cy.get('#checkbox1').check();
      cy.get('#checkbox1').uncheck();
  
      cy.visit('https://expandtesting.com');
      cy.get('#dropdown').select('Option 1');
  
      cy.visit('https://expandtesting.com');
      cy.get('.figure').first().trigger('mouseover');
  
      cy.visit('https://expandtesting.com');
      cy.get('#hot-spot').rightclick();
    });
  
  });
  