///<reference types = "cypress"/>

describe('Tickets', () => {
  beforeEach(() => cy.visit('https://bit.ly/2XSuwCW'));
  it('fills and reset the entire form', () => {
    const firstName = 'Fulana';
    const lastName = 'de Tal';
    const fullname = `${firstName} ${lastName}`;

    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#email').type('email@email.com');
    cy.get('#ticket-quantity').select('2');
    cy.get('#vip').check();
    cy.get('#friend').check();
    cy.get('#requests').type('Vegetarian');

    cy.get('.agreement p').should(
      'contain',
      `I, ${fullname}, wish to buy 2 VIP tickets`
    );

    cy.get('#agree').click();
    cy.get('#signature').type(fullname);

    cy.get('button[type="submit"]')
      .as('submitButton')
      .should('not.be.disabled');
    cy.get('button[type="reset"]').click();
    cy.get('@submitButton').should('be.disabled');
  });

  it('fill only mandatory fields', () => {});
  const firstName = 'Fulana';
  const lastName = 'de Tal';
  const email = 'email@email.com';

  cy.fillMandatoryField(data);

  cy.get('button[type="submit"]').as('submitButton').should('not.be.disabled');
  cy.get('#agree').uncheck();
  cy.get('@submitButton').should('be.disabled');
});
