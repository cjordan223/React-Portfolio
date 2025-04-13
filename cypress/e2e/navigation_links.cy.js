describe('Navigation Links Test', () => {
  // Test for main navigation links
  it('should verify main navigation links work', () => {
    cy.visit('/');
    
    // Test main navigation menu links
    cy.get('a[href="/projects"]').click();
    cy.url().should('include', '/projects');
    cy.go('back');
    
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
    cy.go('back');
    
    cy.get('a[href="/contact"]').click();
    cy.url().should('include', '/contact');
    cy.go('back');
  });
  
  // Test for project page links
  it('should verify project page links work', () => {
    cy.visit('/projects');
    
    // Test tab navigation
    cy.contains('Web Applications').click();
    cy.contains('Programming').click();
    cy.contains('Archive').click();
    cy.contains('Education').click();
    
    // Test course links from education tab
    cy.contains('Education').click();
    cy.contains('CST 499: Directed Capstone').parent().contains('Details').click();
    cy.url().should('include', '/course/cst499');
    cy.contains('Back to Projects').click();
    cy.url().should('include', '/projects');
    
    // Test a few more course links
    cy.contains('Education').click();
    cy.contains('CST 438: Software Engineering').parent().contains('Details').click();
    cy.url().should('include', '/course/cst438');
    cy.contains('Back to Projects').click();
    cy.url().should('include', '/projects');
  });
  
  // Test for course page back navigation
  it('should verify all course pages have working back navigation', () => {
    // Array of all course IDs
    const courseIds = [
      'cst499', 'cst438', 'cst383', 'cst370', 'cst363', 
      'cst336', 'cst334', 'cst329', 'cst338', 'cst311',
      'cst300', 'cst462s'
    ];
    
    // Visit each course page and test back navigation
    courseIds.forEach(courseId => {
      cy.visit(`/course/${courseId}`);
      cy.contains('Back to Projects').click();
      cy.url().should('include', '/projects');
    });
  });
  
  // Test for other section links
  it('should verify webdesign page links work', () => {
    cy.visit('/webdesign');
    cy.contains('Main Projects Page').click();
    cy.url().should('include', '/projects');
  });
  
  it('should verify programming page links work', () => {
    cy.visit('/programming');
    cy.contains('Back to Projects').should('exist').click();
    cy.url().should('include', '/projects');
  });
  
  it('should verify webapps page links work', () => {
    cy.visit('/webapps');
    cy.contains('Back to Projects').should('exist').click();
    cy.url().should('include', '/projects');
  });
}); 