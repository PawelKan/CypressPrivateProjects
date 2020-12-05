/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

const url = require("../fixtures/urls.json");
const { loginPage } = require("../support/PageObjects/HomePage/LoginPageObject.spec");

describe("Login Page tests", () => {
    it("Visit Login Page and verify elements", () =>{
        cy.visit(url.urlLoginPage);

        loginPage.verifyLoginPageElements();
    })
})