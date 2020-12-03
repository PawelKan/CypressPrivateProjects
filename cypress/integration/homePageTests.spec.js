/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

const urls = require('../fixtures/url.json')

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
        cy.visit(urls.urlToHomePage);

        cy.log("**1 Verify Woman Category labe**")
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**2 Verify Dresses Category labe**")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")

        cy.log("**2 Verify T-shirts Category labe**")
        homePage.getBtn_categoryTshirts().should('be.visible').and('contain', "T-shirts")
    })
})