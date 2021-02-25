/// <reference types = "cypress" />

describe("Checking actions", () => {

    it("Go to HomePage and writefile with products and prices on homepage", ()=>{
        let productsOnHomePage = [];
        

        cy.visit('http://automationpractice.com/index.php');

        cy.get('#homefeatured .product-container').each((element)=>{
            let productName = element.find('.right-block > h5 > .product-name').text().trim(); //save product name
            let productPrice = element.find('.right-block > .content_price > .price').text().trim(); //save product price
            productsOnHomePage.push({[productName]: productPrice}) // save product name and its price to array

        }).then(() =>{
            //save products parameters into file
            cy.writeFile("ProductsOnHomePage.txt", productsOnHomePage); 
        })
    })
    it("register user with request", () =>{
        
        cy.visit("/")
        cy.get('head > script:nth-child(39)').first().invoke("text").then((text) =>{
            const test = text.toString().search()
            cy.log(test) 
            cy.log(text);
            
        });
    })

    it.only("Visit home page and save all URLs from it", ()=>{
        let urlFromHomepage = [];
        cy.visit('/')
        cy.get('a').each((element) => {
            cy.wrap(element).invoke('attr', 'href').then((href) => {
                urlFromHomepage.push(href)
                cy.log(href)
            })
            cy.writeFile("UrlFromHomePage.json", urlFromHomepage); 
            
        })
    })

    it("Check js errors on page", () => {

    })

    it("check intercet and wait with alias", () => {
        
    })
})