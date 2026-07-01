describe('Part N: Mini Project Integration Suite', () => {
  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/', { 
      timeout: 90000, 
      onBeforeLoad(win) { delete win.navigator.serviceWorker; }
    });
  });

  it('should execute a multi-page interaction flow with five assertions', () => {
    cy.get('#country').select('Japan').should('have.value', 'japan');
    cy.get('#monday').check().should('be.checked');
    cy.get('#tuesday').uncheck().should('not.be.checked');
    cy.get('#male').check().should('be.checked');

    cy.get('input[type="file"]').first().selectFile({
      contents: Cypress.Buffer.from('Mini project sample payload'),
      fileName: 'project-proof.txt',
      mimeType: 'text/plain'
    });

    cy.get('#name').should('be.visible');
    cy.get('#email').should('exist');
    cy.get('.title').should('contain', 'Automation');
    cy.get('#productTable').should('exist');
    cy.scrollTo('bottom');
  });
});
