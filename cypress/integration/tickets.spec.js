///<reference types = "cypress"/>

describe('Tickets', () => {
  beforeEach(() => cy.visit('https://bit.ly/2XSuwCW'));

  it('fills all the text input fields', () => {
    const firstName = 'Nome de Fulana';
    const lastName = 'Sobrenome de Fulana';
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#email').type('email@email.com');
    cy.get('#requests').type('Vegetarian');
    cy.get('#signature').type(`${firstName} ${lastName}`);
  });

  it('select two tickets', () => {
    cy.get('#ticket-quantity').select('2');
  });

  it('select "vip" ticket type', () => {
    cy.get('#vip').check();
  });

  it('select "social-media" checkbox', () => {
    cy.get('#social-media').check();
  });

  it('selects "friend" and "publication" checkbox, then uncheck "friend" checkbox', () => {
    cy.get('#friend').check();
    cy.get('#publication').check();
    cy.get('#friend').uncheck();
  });

  it("has 'TICKETBOX' header's heading", () => {
    cy.get('header h1').should('contain', 'TICKETBOX');
  });

  it('alerts on invalid email', () => {
    cy.get('#email').type('email.email.com');
    cy.get('#email.invalid').should('exist');
    cy.get('#email').clear().type('email@email.com');
    cy.get('#email.invalid').should('not.exist');
  });
});
