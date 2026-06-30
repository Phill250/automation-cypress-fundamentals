describe('Part B: Assertions Practice Suite', () => {

    it('should execute implicit and explicit assertion strategies', () => {
      cy.visit('https://expandtesting.com');
      
      cy.get('#input-number').should('be.visible');
      cy.get('#input-number').should('have.attr', 'type', 'number');
      cy.get('#input-number').should('have.class', 'form-control');
  
      cy.get('h1').then(($title) => {
        expect($title.text()).to.equal('Inputs');
        expect($title.text()).to.not.be.empty;
        expect($title).to.be.visible;
      });
    });
  
  });
  