/// <reference types="cypress" /> 

const { homePageHeader } = require("../support/PageObjects/HomePage/HomePageHeaderObject.spec");
const { loginPage } = require("../support/PageObjects/LoginPage/LoginPageObject.spec");
const { myAccount } = require("../support/PageObjects/MyAccount/MyAccountPageObject.spec");

const url = require("../fixtures/urls.json");

describe("Login Page tests (Negative tests)", () => {
    it("Try to log in with invalid mail", () =>{
        cy.log("**Visit [Login Page]**")
        cy.visit(url.urlLoginPage)

        cy.log("**Verify [Login Page] fields, elements etc**")
        loginPage.verifyLoginPageElements();

        cy.log("**Type invalid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('invalid-mail.com')
        loginPage.getTxt_LoginPassword().type("Test123")

        cy.log("**Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        cy.log("**Verify error alert**")
        loginPage.getLab_LoginErrorMessage().should('contain', 'Invalid email address.')
    })

    it("Try to log in with invalid password", () =>{
        cy.log("**Visit [Login Page]**")
        cy.visit(url.urlLoginPage)

        cy.log("**Verify [Login Page] fields, elements etc**")
        loginPage.verifyLoginPageElements();

        cy.log("**Type invalid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('fbn33265@bcaoo.com')
        loginPage.getTxt_LoginPassword().type("ivalid-password")

        cy.log("**Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        cy.log("**Verify error alert**")
        loginPage.getLab_LoginErrorMessage().should('contain', 'Authentication failed.')
    })
})

describe("Login Page tests (Positive)", () => {

    before("Login into page", () => {
        cy.log("**Visit [Login Page]**")
        cy.visit(url.urlLoginPage)

        cy.log("**Verify [Login Page] fields, elements etc**")
        loginPage.verifyLoginPageElements();
        //USER: fbn33265@bcaoo.com / Test123

        cy.log("**Type valid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('fbn33265@bcaoo.com')
        loginPage.getTxt_LoginPassword().type("Test123")

        cy.log("**Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        Cypress.Cookies.preserveOnce()

    })
    it("Verify My Account elements", () =>{
      
        cy.log("**Verify My account page after login**")
        myAccount.verifyMyAccountPageElements()
    })

    it("Click Sign Out", () => {
        homePageHeader.getBtn_signOut().click()
    })

    
})