/// <reference types = 'cypress' />

class HomePageHeader {

    getBtn_contactUs() { return cy.get('#contact-link > a[title="Contact Us"]') }
    getBtn_signIn() { return cy.get('.login') }
    getBtn_signOut() { return cy.get('.logout') }
    getBtn_categoryWomen() { return cy.get('#block_top_menu > ul >li').first() }
    getBtn_categoryDresses() { return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul') }
    getBtn_categoryTshirts() { return cy.get('.sf-menu > :nth-child(3) > a') }
}
export const homePageHeader = new HomePageHeader()