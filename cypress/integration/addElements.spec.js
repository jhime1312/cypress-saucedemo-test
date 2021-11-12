describe('Add elements to cart', () => {
     beforeEach(() =>{
        cy.visit('/');
        cy.get('input#user-name').type(Cypress.env('accepted_username'));
        cy.get('input#password').type(Cypress.env('accepted_password'));
        cy.get('input#login-button').click();
        cy.get('div#shopping_cart_container').should('be.visible');
    })
    it('Verify that elements can be added to the cart', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
    })
    it('Verify that after selecting a list of products, is possible to add more products to the cart', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('button#continue-shopping').click();
        cy.get('button#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('a#item_1_title_link').should('be.visible');
    })
    it('Verify that is possible to see a product details when the product is added to the cart', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('a#item_4_title_link').click();
        cy.get('div.inventory_details_name.large_size').should('be.visible');
    })
    it('Verify that is possible to remove a product that was added to the cart', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('button#continue-shopping').click();
        cy.get('button#remove-sauce-labs-backpack').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_0_title_link').should('be.visible');
    })
    it('Verify that is possible to remove a product added to the cart from the details inside a product', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('a#item_4_title_link').click();
        cy.get('div.inventory_details_name.large_size').should('be.visible');
        cy.get('button#remove-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-backpack').should('be.visible');
        cy.get('a.shopping_cart_link').click();
        cy.get('a#item_0_title_link').should('be.visible');
    })
    it('Verify that is possible to remove a product added to the cart from the list of products selected in the cart and go back to All Items list', () =>{
        cy.get('button#add-to-cart-sauce-labs-backpack').click();
        cy.get('button#add-to-cart-sauce-labs-bike-light').click();
        cy.get('div#shopping_cart_container').click();
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('button#remove-sauce-labs-backpack').click();
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('button#continue-shopping').click();
        cy.get('div#inventory_container').should('be.visible');
    })
});