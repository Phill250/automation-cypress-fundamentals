describe('Part E: State Verification Assertions Suite', () => {

    it('should evaluate distinct element states across parameters', () => {
      cy.visit('https://expandtesting.com');
  
      cy.get('h1').should('be.visible');
      cy.get('#blue').should('exist');
      cy.get('h1').should('contain', 'Radio');
      cy.get('h1').should('have.text', 'Radio Buttons');
      cy.get('#blue').should('have.value', 'blue');
      cy.get('.form-check-input[name="color"]').should('have.length', 4);
      cy.get('#blue').should('be.enabled');
      cy.get('#letterb').should('be.disabled');
      cy.get('#blue').check().should('be.checked');
      cy.get('#blue').should('have.attr', 'type', 'radio');
    });
  
  });
  