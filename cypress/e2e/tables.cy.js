describe('Part I: Structured Tabular Audits Suite', () => {

    it('should parse metrics and navigate active elements in tables', () => {
      cy.visit('https://expandtesting.com');
  
      cy.get('table#table1 tbody tr').should('have.length', 4);
      cy.get('table#table1 thead tr th').should('have.length', 6);
  
      cy.get('table#table1 tbody tr').eq(0).within(() => {
        cy.get('td').eq(0).should('have.text', 'Smith');
        cy.get('td').eq(1).should('have.text', 'John');
        cy.get('a[href="#edit"]').click();
      });
  
      cy.get('table#table1').should('contain', 'jsmith@gmail.com');
    });
  
  });
  