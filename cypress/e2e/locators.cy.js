describe('Part D: Locators Traverse Suite', () => {
    it('should utilize precise DOM traversal mechanisms', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#name').parent().should('have.class', 'form-group');
      cy.get('.form-group').find('#email').should('exist');
    
      cy.get('.form-group').children().first().should('exist');
      cy.get('.form-group').children().last().should('exist');
      cy.get('#productTable tbody tr').eq(0).within(() => {
        cy.get('td').first().should('contain', '1');
      });
    });
  });
  