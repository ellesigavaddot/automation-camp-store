/// <reference types="cypress" />
import Cart from '../page/cart.page'
import Product from '../page/product.page'

describe('Cart Test', ()=>{
    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should have show all products added to cart', ()=>{

        cy.get(Product.storeHeader).should('have.text', 'Shop Now,Quality Items!')

        Product.addProductToCart('0')
        Product.addProductToCart('1')
        Product.addProductToCart('2')

        Cart.toCart()

        cy.get(Cart.cartItems).contains('Fitted Hat').should('be.visible')
        cy.get(Cart.cartItems).contains('Trucker Hat').should('be.visible')
        cy.get(Cart.cartItems).contains('Quality Mouse Pad').should('be.visible')




    })



})