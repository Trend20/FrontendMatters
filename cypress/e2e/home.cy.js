describe('home page', () => {
  // visit the page before any test is run
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  })

  // test if the heading text is correct
  it('the h1 contains the correct text', () => {
    cy.get('h1').contains('Frontend Matters')
  });

  // test if the hero paragraph contains the correct text
  it('the paragraph contains the correct text', () => {
    cy.get('p').contains('Explore some of the most trending topics in the Frontend world! There are different code snippets for every article explaining about a code concept.')
  })
})