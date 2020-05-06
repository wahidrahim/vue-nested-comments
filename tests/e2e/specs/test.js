// https://docs.cypress.io/api/introduction/api.html

describe('Nested comments demo project', () => {
  beforeEach(() => cy.visit('/'));

  it('shows author name', () => {
    cy.contains('.user-name', /Brad/i);
  });

  it('shows author badge', () => {
    cy.contains('.badge', /AUTHOR/i);
  });

  it('shows how long ago it was created', () => {
    cy.contains('.created-at', /.*\d.+ago/gi);
  });

  it('shows comment', () => {
    cy.contains(
      '.comment-body .body',
      'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.'
    );
  });
});
