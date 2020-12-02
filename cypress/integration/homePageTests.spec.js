/// <reference types="cypress" /> 

describe("HomePage tests", () => {
    it("Visit Home Page", () =>{
        cy.visit("/");
    })
})