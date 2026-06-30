describe('Part D: Locators Traverse Suite', () => {

    it('should utilize precise DOM traversal mechanisms', () => {
      cy.visit('https://expandtesting.com');
  
      cy.get('#input-number').parent().should('have.class', 'form-group');
      cy.get('.container').find('form').should('exist');
      cy.get('#input-number').closest('main').should('exist');
      cy.get('.row').children().first().should('exist');
      cy.get('.row').children().last().should('exist');
      
      cy.visit('https://expandtesting.com');
      cy.get('table#table1 tbody tr').eq(0).within(() => {
        cy.get('td').first().should('contain', 'Smith');
        cy.get('td').last().should('contain', 'edit');
      });
    });
  
  });
  