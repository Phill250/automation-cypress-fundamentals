describe('Part I: Structured Tabular Audits Suite', () => {
    it('should parse metrics and navigate active elements in tables', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#productTable tbody tr').should('have.length', 5);
      cy.get('#productTable thead tr th').should('have.length', 4);
      cy.get('#productTable tbody tr').eq(0).within(() => {
        cy.get('td').eq(1).should('have.text', 'Smartphone');
        cy.get('td').eq(2).should('have.text', '$10.99');
        cy.get('input').click();
      });
    });
  });
  