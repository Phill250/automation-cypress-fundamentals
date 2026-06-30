describe('Part H: Comprehensive Form Processing Suite', () => {

    it('should correctly populate and dispatch information models', () => {
      cy.visit('https://expandtesting.com');
  
      cy.get('input[name="firstName"]').type('Philippine');
      cy.get('input[name="lastName"]').type('Giramata');
      cy.get('input[name="email"]').type('phillipinegiramata@gmail.com');
      cy.get('input[name="password"]').type('Pass123!');
      cy.get('input[type="date"]').type('2005-08-15');
      cy.get('select[name="department"]').select('Development');
      cy.get('input[type="checkbox"]').first().check();
      cy.get('input[type="radio"][value="female"]').check();
      
      cy.get('button[type="submit"]').click();
      cy.get('.alert-success').should('be.visible').and('contain', 'Registration successful');
    });
  
  });
  