/// <reference types="cypress" /> 

const {homePageHeader} = require("../support/PageObjects/HomePage/HomePageHeaderObject.spec");

const urls = require("../fixtures/urls.json");

describe("TEST SCENARIO: HomePage tests", () => {
    it("TEST CASE: Visit Home Page", () =>{
        cy.visit(urls.urlHomePage);

        cy.log("**TEST STEP: Verify Contact us button**")
        homePageHeader.getBtn_contactUs().should("be.visible").should('contain', "Contact us")

        cy.log("**TEST STEP: Verify Sign in button**")
        homePageHeader.getBtn_signIn().should("be.visible").should('contain', "Sign in")

        cy.log("**TEST STEP: Verify Women in Category list**")
        homePageHeader.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**TEST STEP: Verify Dresses in Category list**")
        homePageHeader.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")
    })
})