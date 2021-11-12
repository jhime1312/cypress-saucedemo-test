describe('Purchase elements added to the cart', () => {
    beforeEach(() =>{
       cy.visit('/');
       cy.get('input#user-name').type(Cypress.env('accepted_username'));
       cy.get('input#password').type(Cypress.env('accepted_password'));
       cy.get('input#login-button').click();
       cy.get('div#shopping_cart_container').should('be.visible');
       cy.get('button#add-to-cart-sauce-labs-backpack').click();
       cy.get('button#add-to-cart-sauce-labs-bike-light').click();
       cy.get('div#shopping_cart_container').click();
       cy.get('a#item_4_title_link').should('be.visible');
       cy.get('a#item_0_title_link').should('be.visible');
   })
   it('Verify that a list of products added to the chart can be purchased', () =>{
       cy.get('button#checkout').click();
       cy.get('div#checkout_info_container').should('be.visible');
       cy.get('input#first-name').type(Cypress.env('purchase_user_name'));
       cy.get('input#last-name').type(Cypress.env('purchase_user_lastname'));
       cy.get('input#postal-code').type(Cypress.env('purchase_zip'));
       cy.get('input#continue').click();
       cy.get('a#item_4_title_link').should('be.visible');
       cy.get('a#item_0_title_link').should('be.visible');
       cy.get('div.summary_info').should('be.visible');
       cy.get('button#finish').click();
       cy.get('div#checkout_complete_container').should('be.visible');
   })
   it('Verify required fields when a purchase is made', () =>{
        cy.get('button#checkout').click();
        cy.get('div#checkout_info_container').should('be.visible');
        cy.get('input#continue').click();
        cy.get('h3').should('be.visible');
        cy.get('input#first-name').type(Cypress.env('purchase_user_name'));
        cy.get('input#continue').click();
        cy.get('div.error-message-container').should('be.visible');
        cy.get('input#last-name').type(Cypress.env('purchase_user_lastname'));
        cy.get('div.error-message-container').should('be.visible');
        cy.get('input#postal-code').type(Cypress.env('purchase_zip'));
        cy.get('input#continue').click();
        cy.get('a#item_4_title_link').should('be.visible');
       cy.get('a#item_0_title_link').should('be.visible');
       cy.get('div.summary_info').should('be.visible');
    })
    it('Verify is possible to cancel a purchase in the Form page', () =>{
        cy.get('button#checkout').click();
        cy.get('div#checkout_info_container').should('be.visible');
        cy.get('button#cancel').click();
        cy.get('div.cart_list').should('be.visible');
    })
    it('Verify is possible to cancel a purchase in Overview page, before complete the purchase', () =>{
        cy.get('button#checkout').click();
        cy.get('div#checkout_info_container').should('be.visible');
        cy.get('input#first-name').type(Cypress.env('purchase_user_name'));
        cy.get('input#last-name').type(Cypress.env('purchase_user_lastname'));
        cy.get('input#postal-code').type(Cypress.env('purchase_zip'));
        cy.get('input#continue').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('div.summary_info').should('be.visible');
        cy.get('button#cancel').click();
        cy.get('div#inventory_container').should('be.visible');
    })

});

