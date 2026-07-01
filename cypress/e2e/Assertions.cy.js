describe('Part B: Assertions Practice Suite', () => {
    it('should execute implicit and explicit assertion strategies', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.get('#name').should('be.visible').and('have.class', 'form-control');
      cy.get('.title').then(($title) => {
        expect($title.text()).to.contain('Automation Testing Practice');
      });
    });
  });
  