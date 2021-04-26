/// <reference types = 'cypress' />

class MyAccountMyAddressesObject {

    getBtn_AddANewAddress(){
        return cy.get('a[title="Add an address"]');     
    }   

    //Form
    getLab_YourAddressesHeader(){ return cy.get('.page-subheading'); }
    getTxt_FirstName()      { return cy.get('#firstname'); }
    getTxt_LastName()       { return cy.get('#lastname'); }
    getTxt_Company()        { return cy.get('#company'); }
    getTxt_Address()        { return cy.get('#address1'); }
    getTxt_AddressLine2()   { return cy.get('#address2'); }
    getTxt_City()           { return cy.get('#city'); }
    getCmb_State()          { return cy.get('#id_state'); }
    getTxt_ZipPostalCode()  { return cy.get('#postcode'); }
    getCmb_Country()        { return cy.get('#id_country'); }
    getTxt_HomePhone()      { return cy.get('#phone'); }
    getTxt_MobilePhone()    { return cy.get('#phone_mobile'); }
    getTxt_AdditionalInformation(){ return cy.get('#other'); }
    getTxt_PleaseAssignAnAddressTitleForFutureReference(){ return cy.get('#alias');}
    getBtn_Save(){ return cy.get('#submitAddress > span'); }    

}
export const myAccountAddresses = new MyAccountMyAddressesObject()