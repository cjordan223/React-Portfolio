describe('External Links Test', () => {
  it('should verify external links have correct attributes', () => {
    cy.visit('/projects');
    
    // Check that external links open in new tabs
    cy.get('a[href^="http"]').each(($el) => {
      cy.wrap($el).should('have.attr', 'target', '_blank');
      // Optionally check for rel="noopener noreferrer" for security
      cy.wrap($el).should('have.attr', 'rel', 'noopener noreferrer');
    });
  });
  
  // Test specific course page external links
  it('should verify course page external links', () => {
    cy.visit('/course/cst499');
    
    // Check GitHub repository links
    cy.contains('Frontend Repository')
      .should('have.attr', 'href', 'https://github.com/cjordan223/PhishFinder')
      .should('have.attr', 'target', '_blank');
      
    cy.contains('Backend Repository')
      .should('have.attr', 'href', 'https://github.com/cjordan223/PhishFinder-Backend')
      .should('have.attr', 'target', '_blank');
  });
}); 