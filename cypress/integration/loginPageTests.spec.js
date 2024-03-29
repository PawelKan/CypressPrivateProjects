/// <reference types="cypress" /> 

const urls = require("../fixtures/urls.json");
const { loginPage } = require("../support/PageObjects/LoginPage/LoginPageObject.spec");
const { myAccount } = require("../support/PageObjects/MyAccount/MyAccountPageObject.spec");

describe("TEST SUITE: Login Page", () => {
    it("TEST CASE: Visit Login Page and verify elements", () =>{
        cy.log("**TEST STEP: Visit [Login Page]**")
        cy.visit(urls.urlLoginPage);

        cy.log("**TEST STEP: Verify [Login Page] fields, elements etc**")
        loginPage.verifyLoginPageElements();

        cy.log("**TEST STEP: Type invalid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('fbn33265@bcaoo.com')
        loginPage.getTxt_LoginPassword().type("ivalid-password")

        cy.log("**TEST STEP: Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        cy.log("**TEST STEP: Verify error alert**")
        loginPage.getLab_LoginErrorMessage().should('contain', 'Authentication failed.')
    })

    it("TEST CASE: Visit Login page and log into application. Logout after proper login", () =>{
        cy.log("**TEST STEP: Visit [Login Page]**")
        cy.visit(urls.urlLoginPage)
        //USER: fbn33265@bcaoo.com / Test1234

        cy.log("**TEST STEP: Type valid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('fbn33265@bcaoo.com')
        loginPage.getTxt_LoginPassword().type("Test1234")

        cy.log("**TEST STEP: Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        cy.log("**TEST STEP: Verify Login was correct and My Account page is visible**")
        myAccount.verifyMyAccountPageElements()

        cy.log("**TEST STEP: Logout from Application**")
        loginPage.getBtn_HeaderSignOut().click();
        loginPage.getBtn_HeaderSignIn().should("contain", "Sign in")
    })
})