describe('Part F: UI Elements Interaction Suite', () => {
    it('should operate clean assertions against active elements', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#phone').type('1234567890').should('have.value', '1234567890');
      cy.get('#monday').check().should('be.checked');
      cy.get('#female').check().should('be.checked');
      cy.get('#country').select('Canada').should('have.value', 'canada');
      cy.get('a').contains('Home').should('have.attr', 'href', 'http://testautomationpractice.blogspot.com/');
      cy.get('img.wikipedia-icon').should('be.visible');
    });
  });
  