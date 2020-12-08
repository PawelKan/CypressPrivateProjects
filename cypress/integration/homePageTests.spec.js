/// <reference types="cypress" /> 

const {homePageHeader} = require("../support/PageObjects/HomePage/HomePageHeaderObject.spec");

const url = require("../fixtures/urls.json")

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
        cy.visit(url.urlHomePage)

        cy.log("**Verify Contact us button**")
        homePageHeader.getBtn_contactUs().should("be.visible").should('contain', "Contact us")
        
        cy.log("**Verify Sign in button**")
        homePageHeader.getBtn_signIn().should("be.visible").should('contain', "Sign in")

        cy.log("**Verify Women in Category list**")
        homePageHeader.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**Verify Dresses in Category list**")
        homePageHeader.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")

        cy.log("**Verify T-shirts in Category list**")
        homePageHeader.getBtn_signIn().click()
        cy.url().should("contain", "controller=authentication&back=my-account")
    })
})