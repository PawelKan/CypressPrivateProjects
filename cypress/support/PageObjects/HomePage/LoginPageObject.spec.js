/// <reference types = 'cypress' />

class LoginPageObject {

    // Header
    getLab_AuthenticationBreadCrumb() { return cy.get('.breadcrumb') }
    getLab_AuthenticationHeader() {return cy.get('.page-heading')}
    getBtn_HeaderSignOut() { return cy.get('.logout'); }
    getBtn_HeaderSignIn() { return cy.get('.login');}

    //Create an Account Form
    getLab_CreateAnAccountHeader() {return cy.get('#create-account_form > .page-subheading')}
    getLab_EmailAddress() { return cy.get('#create-account_form > .form_content > .form-group > label') }
    getTxt_EmailField() { return cy.get('#email_create') }
    getBtn_CreateAnAccount() {return cy.get('#SubmitCreate > span');}

    //Already Registered? Form
    getLab_AlreadyRegistered() { return cy.get('#login_form > .page-subheading') }
    getTxt_LoginEmailAddress() { return cy.get('#email') }
    getTxt_LoginPassword() { return cy.get('#passwd') }
    getLink_ForgetYourPassword() { return cy.get('.lost_password > a') }
    getBtn_SignIn() { return cy.get('#SubmitLogin > span') }
    

    verifyLoginPageElements(){
        this.getLab_AuthenticationBreadCrumb().should('be.visible').and('contain', 'Authentication')
        this.getLab_AuthenticationHeader().should('be.visible').and('contain', 'Authentication')

        this.getLab_CreateAnAccountHeader().should('be.visible').and('contain', 'Create an account')
        this.getLab_EmailAddress().should('be.visible').and('contain', 'Email address')
        this.getTxt_EmailField().should('be.visible').and('be.empty')
        this.getBtn_CreateAnAccount().should('be.visible').and('contain', 'Create an account')

        this.getLab_AlreadyRegistered().should('be.visible').and('contain', 'Already registered?')
        this.getTxt_LoginEmailAddress().should('be.visible').and('be.empty')
        this.getTxt_LoginPassword().should('be.visible').and('be.empty')
        this.getLink_ForgetYourPassword().should('be.visible').and('contain', 'Forgot your password?')
        this.getBtn_SignIn().should('be.visible').and('contain', 'Sign in')

        return this;
    }
}
export const loginPage = new LoginPageObject()