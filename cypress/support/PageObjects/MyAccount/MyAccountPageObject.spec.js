/// <reference types = 'cypress' />

class MyAccountPageObject {

    // Header
    getLab_MyAccountBreadCrumb() { return cy.get('.breadcrumb') }
    getLab_MyAccountHeader() {return cy.get('.page-heading')}
    getLab_WelcomeToYourAccountMessage() {return cy.get('.info-account')}

    //Main form with buttons
    getBtn_OrderHistoryAndDetails() {return cy.get('.myaccount-link-list a[title="Orders"]');}
    getBtn_MyCreditSlips() {return cy.get('.myaccount-link-list a[title="Credit slips"]');}
    getBtn_MyAddresses() { return cy.get('.myaccount-link-list a[title="Addresses"]');}
    getBtn_MyPersonalInformation() {return cy.get('.myaccount-link-list a[title="Information"]');}
    getBtn_MyWishlists() {return cy.get('.myaccount-link-list a[title="My wishlists"]');}

    //Bottom form
    getBtn_ReturnToHome() {return cy.get('li > .btn > span');}

    verifyMyAccountPageElements(){
        this.getLab_MyAccountBreadCrumb().should('be.visible').and('contain', 'My account')
        this.getLab_MyAccountHeader().should('be.visible').and('contain', 'My account')
        this.getLab_WelcomeToYourAccountMessage().should('be.visible')
            .and('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
        
        this.getBtn_OrderHistoryAndDetails().should('be.visible').and('contain', 'Order history and details')
        this.getBtn_MyCreditSlips().should('be.visible').and('contain', 'My credit slips')
        this.getBtn_MyAddresses().should('be.visible').and('contain', 'My addresses')
        this.getBtn_MyPersonalInformation().should('be.visible').and('contain', 'My personal information')
        this.getBtn_MyWishlists().should('be.visible').and('contain', 'My wishlists')

        this.getBtn_ReturnToHome().should('be.visible').and('contain', 'Home')
    }
}
export const myAccount = new MyAccountPageObject()