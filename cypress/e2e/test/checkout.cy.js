/// <reference types="cypress" />

import ProductPage from '../page/product.page'
import CheckoutPage from '../page/checkout.page'
import OrderConfirmationPage from '../page/orderConf.page'
import Auth from '../page/auth.page'


describe('Checkout from Cart', ()=>{
    beforeEach(()=>{
        Auth.login('test123@gmail.com','Password1!')
        cy.visit('/products')
        cy.wait(1500)
    })


    it('should checkout single item from cart', ()=>{
        
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')
        cy.get(ProductPage.productHeader).should('be.visible').and('not.have.attr', 'hidden')
        
        //add Quality Pillow to Cart - it is the 5th product, with an index of 4
        ProductPage.addProductToCart(4)

        cy.get(ProductPage.cartSummaryModal).should('exist').and('be.visible')
        cy.get(ProductPage.prodName).contains(' Quality Pillow ').should('be.visible')

        //click checkout in cart summary modal
        ProductPage.checkoutFromCartModal()
        
        // assert that user is on checkoutpage
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products#/checkout')
        CheckoutPage.filloutBillingForm("Test",'email@email.com',"1234 Baker Ave N","New York","00000")
        CheckoutPage.fillPaymentForm()

        //assert parts of the Order confirmation page
        
        cy.get(OrderConfirmationPage.confMessage).eq(0).should('have.text', 'Thank you for your order')
        cy.get(OrderConfirmationPage.invoiceNumber).should('exist')

    })







})