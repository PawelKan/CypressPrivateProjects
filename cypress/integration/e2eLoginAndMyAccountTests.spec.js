/// <reference types="cypress" /> 

const urls = require("../fixtures/urls.json");
const { loginPage } = require("../support/PageObjects/LoginPage/LoginPageObject.spec");
const { myAccount } = require("../support/PageObjects/MyAccount/MyAccountPageObject.spec");
const { myAccountAddresses } = require("../support/PageObjects/MyAccount/MyAccountAdressessPageObject.spec");

describe("TEST SCENARIO: End to end My Account tests", () => {
    it.only("TEST CASE: Login, Go to address page, add new address, verify, delete added address", () =>{
        let aliasNameText = "Cypress" + Date.now().toString();
        
        cy.log("Test step - Login as user into app")
        cy.visit(urls.urlLoginPage);
        
        loginPage.loginAsUser();

        myAccount.verifyMyAccountPageElements();

        myAccount.getBtn_MyAddresses().click();

        myAccountAddresses.getBtn_AddANewAddress().click();

        myAccountAddresses.getLab_YourAddressesHeader().should("be.visible").and("contain", "Your addresses");
        myAccountAddresses.getTxt_FirstName().clear().type("CypressFirstName");
        myAccountAddresses.getTxt_LastName().clear().type("CypressLastName");
        myAccountAddresses.getTxt_Company().clear().type("CypressCompanyName");
        myAccountAddresses.getTxt_Address().clear().type("CypressAddress");
        myAccountAddresses.getTxt_AddressLine2().clear().type("CypressAddressLineTwo");
        myAccountAddresses.getTxt_City().clear().type("CypressCity");
        //myAccountAddresses.getCmb_State().click()
        myAccountAddresses.getTxt_ZipPostalCode().clear().type("12345");
        myAccountAddresses.getCmb_Country().select("United States", {force:true});
        myAccountAddresses.getTxt_HomePhone().clear().type("789456123");
        myAccountAddresses.getTxt_MobilePhone().clear().type("+48123456789");
        myAccountAddresses.getTxt_AdditionalInformation().clear().type("CypressAdditionalInformation");
        myAccountAddresses.getTxt_PleaseAssignAnAddressTitleForFutureReference().clear().type(aliasNameText);
        //Changing State must be the last action because it is setup on "-" when cypress type into other field
        myAccountAddresses.getCmb_State().select("Alaska", {force : true}).should('have.value', "2");

        myAccountAddresses.getBtn_Save().click();

        cy.contains(aliasNameText).should('be.visible').parents(".address").find("a[title=\"Delete\"]").click();
        cy.contains(aliasNameText).should('not.exist')
    })
})