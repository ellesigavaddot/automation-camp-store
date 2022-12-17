/// <reference types="cypress" />

import ProductPage from '../page/product.page'
import productData from '../data/product.data'

describe('Product Detail page', ()=>{

    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(2000)
    })

    it('should return to products screen from product detail screen', ()=>{
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        cy.get(ProductPage.productHeader).should('be.visible').and('have.text',"Products")

        //click image of product to get to the product details
        ProductPage.clickImage(2)
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products/quality-mousepad')

        //assert that the back to cart button exists and is visible
        cy.get(ProductPage.buttonBackToProduct).should('have.text', 'Back to products')
        ProductPage.backToProducts()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    })

    it.only('should open detail product view for related products', ()=>{
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        cy.get(ProductPage.productHeader).should('be.visible').and('have.text',"Products")

        ProductPage.clickImage(6)
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products/quality-sweatshirt')
        cy.get(ProductPage.productName).should('have.text', 'Quality Sweatshirt ')
        //navigate to the related product

        cy.get(ProductPage.headerRelatedProducts).contains('Related Products').scrollIntoView()

        if (ProductPage.relatedProductsImgs.length >=1 ){
            cy.get(ProductPage.relatedProductsImgs).first().click()
        }
        cy.get(ProductPage.productName).should('have.text','Quality Hooded Sweatshirt ')

    })

    it('should add item to cart from the product detail view', ()=>{

        /*
        1.assert on product page,
        2.go to product page, assert on the name of the item 
        3.add product to cart
        4.assert that the product is added successfully to the cart
        */

        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')

        ProductPage.clickImage(15) //open product detail view for Quality Heal Shoes
        cy.get(ProductPage.productName).should('have.text', 'Quality Sweatshirt ')
        cy.get(ProductPage.productPrice).should('have.text', productData.products[15].price)

        ProductPage.increaseProdQtyPD(2)




        
    })




})