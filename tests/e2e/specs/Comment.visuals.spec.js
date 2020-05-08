// https://docs.cypress.io/api/introduction/api.html

describe('Comment component visuals', () => {
  beforeEach(() => cy.visit('/'));

  it('shows author name', () => {
    cy.contains('.user-name', /Brad/i);
  });

  it('shows author badge', () => {
    cy.contains('.badge', /AUTHOR/i);
  });

  it('shows how long ago it was created', () => {
    cy.contains('.created-at', /\d+.*\s{1}ago/i);
  });

  it('shows comment', () => {
    cy.contains(
      '.comment-body .body',
      'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.'
    );
  });

  it('shows reply button', () => {
    cy.contains('.comment-actions button:nth-child(1)', /reply/i);
  });

  it('shows replies buttons', () => {
    cy.contains('.comment-actions button:nth-child(2)', /^\d+\s{1}replies/i);
  });

  it('shows upvote button with 123 points', () => {
    cy.contains('.comment-actions .vote-buttons > .upvote .points', /123/i);
  });

  it('shows downvote button with 0 points', () => {
    cy.contains('.comment-actions .vote-buttons > .downvote .points', /0/i);
  });
});
