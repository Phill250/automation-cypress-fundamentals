describe('Part L: Viewport Scroll Controls Suite', () => {

    it('should adjust window perspective and verify element presence', () => {
      cy.visit('https://expandtesting.com');
  
      cy.scrollTo('bottom');
      cy.scrollTo('top');
      cy.get('footer').scrollIntoView().should('be.visible');
    });
  
  });
  