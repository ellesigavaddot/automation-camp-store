/// <reference types="cypress" />
import Product from '../page/product.page'


describe('Add to Cart', ()=> {

    it('should remove a product from the cart via the Cart summary', ()=>{
        cy.visit('/products')
        cy.get(Product.storeImage).should('be.visible')
        cy.get(Product.storeHeader).contains('Shop Now')

        Product.addFirstProductToCart()
        Product.removeFirstProduct()
        cy.get(Product.messageCartEmpty).should('be.visible')

    })



})