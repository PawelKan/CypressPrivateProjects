/// <reference types="cypress" /> 

const { homePage } = require("../support/PageObjects/HomePage/HomePageObject.spec");

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
<<<<<<< Updated upstream
        cy.visit("/");
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")
=======
        cy.visit(url.urlHomePage);

        cy.log("**Verify Contact us button**")
        homePage.getBtn_contactUs().should("be.visible").should('contain', "Contact us")

        cy.log("**Verify Sign in button**")
        homePage.getBtn_signIn().should("be.visible").should('contain', "Sign in")

        cy.log("**Verify Women in Category list**")
        homePage.getBtn_categoryWomen().should('be.visible').and('contain', "Women")

        cy.log("**Verify Dresses in Category list**")
        homePage.getBtn_categoryDresses().should('be.visible').and('contain', "Dresses")

        cy.log("**Verify T-shirts in Category list**")
>>>>>>> Stashed changes
        homePage.getBtn_categoryTshirts().should('be.visible').and('contain', "T-shirts")

        homePage.getBtn_signIn().click()
        cy.url().should("contain", "controller=authentication&back=my-account")
    })
   
})