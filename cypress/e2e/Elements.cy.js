describe('Part F: UI Elements Interaction Suite', () => {

    it('should operate clean assertions against active elements', () => {
      cy.visit('https://expandtesting.com');
      cy.get('#input-text').type('Testing Fields').should('have.value', 'Testing Fields');
      
      cy.visit('https://expandtesting.com');
      cy.get('#checkbox1').check().should('be.checked');
      
      cy.visit('https://expandtesting.com');
      cy.get('#red').check().should('be.checked');
      
      cy.visit('https://expandtesting.com');
      cy.get('#dropdown').select('Option 2').should('have.value', '2');
      
      cy.get('a.nav-link').first().should('have.attr', 'href', '/');
      cy.get('img').first().should('be.visible');
    });
  
  });
  