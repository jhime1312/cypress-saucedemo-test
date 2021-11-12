describe('Login page', () => {
    it('Verify that a user can log into the page with valid credentials', () => {
        cy.login();
    })
    it('Verify username field only accept values set on Accepted user name', () => {
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('username_test'));
        cy.get('input#password').type(Cypress.env('accepted_password'));
        cy.get('input#login-button').click();
        cy.get('div.error-message-container.error').should('be.visible');
    })
    it('Verify password field only accept values set on Password for all users tab', () => {
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('accepted_username'));
        cy.get('input#password').type(Cypress.env('password_test'));
        cy.get('input#login-button').click();
        cy.get('div.error-message-container.error').should('be.visible');
    })
    it('Verify login of all user types provided - Locked_out_user', () => {
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('locked_username'));
        cy.get('input#password').type(Cypress.env('accepted_password'));
        cy.get('input#login-button').click();
        cy.get('h3').should('be.visible');
    })
    it('Verify login of all user types provided - Problem user', () => {
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('prolem_username'));
        cy.get('input#password').type(Cypress.env('accepted_password'));
        cy.get('input#login-button').click();
        cy.get('div#shopping_cart_container').should('be.visible');
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#remove-sauce-labs-backpack').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('div.cart_item').should('be.visible');

    })
    it('Verify login of all user types provided - Performance glitch user', () => {
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('performance_username'));
        cy.get('input#password').type(Cypress.env('accepted_password'));
        cy.get('input#login-button').click();
        cy.get('div#shopping_cart_container').should('be.visible');
    })

});

