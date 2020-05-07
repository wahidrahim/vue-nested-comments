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

describe('Comment component interactions', () => {
  beforeEach(() => cy.visit('/'));

  it('toggles viewing reply form when "REPLY" button is clicked', () => {
    cy.get('.comment-actions > button:nth-child(1)').click();
    cy.contains('.comment-reply-form button', /reply/i);
    cy.get('.comment-actions > button:nth-child(1)').click();
    cy.get('.comment-reply-form button').should('not.exist');
  });

  it('toggles viewing replies form when "REPLIES" button is clicked', () => {
    cy.get('.comment-actions > button:nth-child(2)').click();
    cy.get('.replies-grid-item .comment:first-child .user-name').contains(
      /kathy/i
    );
    cy.get('.comment-actions > button:nth-child(2)')
      .first()
      .click();
    cy.get('.replies-grid-item .comment:first-child .user-name').should(
      'not.exist'
    );
  });

  it('increments upvote points by 1 when upvote is clicked', () => {
    cy.get('.comment-actions .vote-buttons > .upvote')
      .invoke('text')
      .then(parseInt)
      .then((points) => {
        cy.get('.comment-actions .vote-buttons > .upvote').click();
        cy.get('.comment-actions .vote-buttons > .upvote')
          .invoke('text')
          .then(parseInt)
          .should((newPoints) => {
            expect(newPoints).to.eq(points + 1);
          });
      });
  });

  it('decrements downvote points by 1 when downvote is clicked', () => {
    cy.get('.comment-actions .vote-buttons > .downvote')
      .invoke('text')
      .then(parseInt)
      .then((points) => {
        cy.get('.comment-actions .vote-buttons > .downvote').click();
        cy.get('.comment-actions .vote-buttons > .downvote')
          .invoke('text')
          .then(parseInt)
          .should((newPoints) => {
            expect(newPoints).to.eq(points - 1);
          });
      });
  });
});
