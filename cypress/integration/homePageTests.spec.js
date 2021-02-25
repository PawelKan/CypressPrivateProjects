/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

const urls = require("../fixtures/urls.json");

describe("TEST SCENARIO: HomePage tests", () => {
    it("TEST CASE: Visit Home Page", () =>{
        cy.visit(urls.urlHomePage);

        cy.log("**TEST STEP: Verify Contact us button**")
        homePage.getBtn_contactUs().should("be.visible").should('contain', "Contact us")

        cy.log("**TEST STEP: Verify Sign in button**")
        homePage.getBtn_signIn().should("be.visible").should('contain', "Sign in")

        cy.log("**TEST STEP: Verify Women in Category list**")
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**TEST STEP: Verify Dresses in Category list**")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")

        cy.log("**TEST STEP: Verify T-shirts in Category list**")
        homePage.getBtn_signIn().click()
        cy.url().should("contain", "controller=authentication&back=my-account")
    })
   
})