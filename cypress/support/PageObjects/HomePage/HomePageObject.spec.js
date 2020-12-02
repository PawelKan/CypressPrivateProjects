/// <reference types = 'cypress' />

class HomePage {

    getBtn_contactUs() { return cy.get('#contact-link > a') }
    getBtn_signIn() { return cy.get('.login') }
    getBtn_categoryWomen() { return cy.get('#block_top_menu > ul >li').first() }
    getBtn_categoryDresses() { return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul') }
    getBtn_categoryTshirts() { return cy.get('.sf-menu > :nth-child(3) > a') }
}
export const homePage = new HomePage()