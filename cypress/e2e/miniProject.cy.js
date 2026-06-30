describe('Part N: Mini Project Integration Suite', () => {

  beforeEach(() => {
    cy.visit('https://expandtesting.com', { 
      timeout: 90000, 
      onBeforeLoad(win) {
        delete win.navigator.serviceWorker;
      }
    });
  });

  it('should execute a multi-page interaction flow with five assertions', () => {
    cy.visit('https://expandtesting.comdropdown', { timeout: 30000 });
    cy.get('#dropdown').select('Option 1').should('have.value', '1');

    cy.visit('https://expandtesting.comcheckboxes', { timeout: 30000 });
    cy.get('#checkbox1').check().should('be.checked');
    cy.get('#checkbox2').uncheck().should('not.be.checked');

    cy.visit('https://expandtesting.comradio-buttons', { timeout: 30000 });
    cy.get('#blue').check().should('be.checked');

    cy.visit('https://expandtesting.comupload', { timeout: 30000 });
    cy.get('#fileInput').selectFile({
      contents: Cypress.Buffer.from('Mini project sample payload'),
      fileName: 'project-proof.txt',
      mimeType: 'text/plain'
    });
    cy.get('#fileSubmit').click();

    cy.get('h3').should('be.visible');
    cy.get('h3').should('have.text', 'File Uploaded!');
    cy.get('#uploaded-files').should('exist');
    cy.get('#uploaded-files').should('contain', 'project-proof.txt');
    cy.get('footer').scrollIntoView().should('be.visible');
  });

});
