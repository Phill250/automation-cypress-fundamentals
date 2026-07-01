describe('Part E: State Verification Assertions Suite', () => {
    it('should evaluate distinct element states across parameters', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('h1.title').should('be.visible').and('contain', 'Automation').and('contain.text', 'Automation Testing Practice');
      cy.get('#email').should('exist').and('have.value', '').and('be.enabled');
      cy.get('#female').should('not.be.disabled');
      cy.get('#male').check().should('be.checked').and('have.attr', 'type', 'radio');
      cy.get('input[type="checkbox"]').should('have.length', 12);
    });
  });
  