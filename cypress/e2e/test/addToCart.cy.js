/// <reference types="cypress" />
import Product from '../page/product.page'


describe('Add to Cart - Cart Summary Modal', ()=> {
    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should remove a product from the cart via the Cart summary', ()=>{
        cy.get(Product.storeImage).should('be.visible')
        cy.get(Product.storeHeader).contains('Shop Now').should('be.visible')

        Product.addFirstProductToCart()
        Product.removeFirstProduct()
        cy.get(Product.messageCartEmpty).should('be.visible')

    })

    it('should close the cart summary after adding a product', ()=>{
        Product.addProductToCart('2')
        cy.wait(3000) //wait for the overlay to open and product to be shown
        Product.closeCartSummary()
        cy.get(Product.cartSummaryModal).should('not.exist')
    })

    it('should increase the product quantity in cart summary', ()=>{
        Product.addProductToCart('4')
        Product.incrementProductQtyBy2()

        cy.get(Product.itemQty).should('have.text', '3')

    })



})