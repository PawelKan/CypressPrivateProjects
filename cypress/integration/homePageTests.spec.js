/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
        cy.visit("/");
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")
        homePage.getBtn_categoryTshirts().should('be.visible').and('contain', "T-shirts")
    })
})