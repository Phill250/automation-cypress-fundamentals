describe('Part H: Comprehensive Form Processing Suite', () => {
    it('should correctly populate and dispatch information models', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#name').type('Philippine');
      cy.get('#email').type('phillipinegiramata@gmail.com');
      cy.get('#phone').type('0788888888');
      cy.get('#textarea').type('123 Kigali St');
      cy.get('#female').check();
      cy.get('#tuesday').check();
      cy.get('#country').select('Japan');
      cy.get('#colors').select('Blue');
    });
  });
  