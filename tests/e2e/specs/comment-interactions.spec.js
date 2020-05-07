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
