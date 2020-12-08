/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

const url = require("../fixtures/urls.json");
const { loginPage } = require("../support/PageObjects/HomePage/LoginPageObject.spec");
const { myAccount } = require("../support/PageObjects/HomePage/MyAccountPageObject.spec");

describe("Login Page tests", () => {
    it("Visit Login Page and verify elements", () =>{
        cy.log("**Visit [Login Page]**")
        cy.visit(url.urlLoginPage);

        cy.log("**Verify [Login Page] fields, elements etc**")
        loginPage.verifyLoginPageElements();
    })

    it("Visit Login page and log into application", () =>{
        cy.log("**Visit [Login Page]**")
        cy.visit(url.urlLoginPage)
        //USER: fbn33265@bcaoo.com / Test123

        cy.log("**Type valid account credendials**")
        loginPage.getTxt_LoginEmailAddress().type('fbn33265@bcaoo.com')
        loginPage.getTxt_LoginPassword().type("Test123")

        cy.log("**Click on Sign in button**")
        loginPage.getBtn_SignIn().click()

        cy.log("**Verify My account page after login**")
        myAccount.verifyMyAccountPageElements()

    })

    it("", () => {

    })
    
})