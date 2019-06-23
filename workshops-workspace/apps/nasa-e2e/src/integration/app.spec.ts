import { getGreeting } from '../support/app.po';

describe('nasa', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to Nasa!');
  });
});
