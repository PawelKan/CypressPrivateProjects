/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

const url = require("../fixtures/urls.json")

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
        cy.visit(url.urlHomePage);

        cy.log("**1 Verify Women in Category list**")
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**2 Verify Dresses in Category list**")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")

        cy.log("**3 Verify T-shirts in Category list**")
        homePage.getBtn_categoryTshirts().should('be.visible').and('contain', "T-shirts")
    })
})