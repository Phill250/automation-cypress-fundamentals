describe('Part L: Viewport Scroll Controls Suite', () => {
    it('should adjust window perspective and verify element presence', () => {
        cy.visit('https://testautomationpractice.blogspot.com/');
      cy.scrollTo('bottom');
      cy.scrollTo('top');
      cy.get('#name').scrollIntoView().should('be.visible');
    });
  });
  