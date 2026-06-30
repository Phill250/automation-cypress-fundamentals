describe('Part A: Test Structure Suite', () => {

    before(() => {
      cy.log('Suite level execution setup initiated');
    });
  
    after(() => {
      cy.log('Suite level execution teardown complete');
    });
  
    beforeEach(() => {
      cy.visit('https://expandtesting.com');
    });
  
    afterEach(() => {
      cy.clearCookies();
    });
  
    it('should run a baseline test verification inside structural hooks', () => {
      cy.get('h1').should('be.visible');
    });
  
  });
  