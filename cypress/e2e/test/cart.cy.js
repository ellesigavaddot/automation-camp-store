/// <reference types="cypress" />
import Cart from '../page/cart.page'
import Product from '../page/product.page'

describe('Cart Test', ()=>{
    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should verify all items have been added to cart', ()=>{

        cy.get(Product.storeHeader).should('have.text', 'Shop Now,Quality Items!')

        Product.addProductToCart('0')
        Product.closeCartSummary()
        Product.addProductToCart('1')
        Product.closeCartSummary()
        Product.addProductToCart('2')
        Cart.clickCartLink()

        //Cart.toCart()

        cy.get(Cart.cartItems).contains('Fitted Hat').should('be.visible')
        cy.get(Cart.cartItems).contains('Trucker Hat').should('be.visible')
        cy.get(Cart.cartItems).contains('Quality Mousepad').should('be.visible')

        cy.get(Cart.buttonCheckout).should('exist')
    })

    it('should add a single item to the cart and sign out', ()=>{
        cy.get(Product.storeHeader).should('have.text', 'Shop Now,Quality Items!')

        Product.addProductToCart('0')
        cy.get(Cart.cartItems).contains('Quality Fitted Hat').should('be.visible')
        Product.closeCartSummary()

        //signout
        Product.signOut()
        cy.visit('/products') //signout is kinda weird so I just routed back to the page
        cy.wait(1500)
        Cart.toCart()
        cy.get(Cart.cartItems).contains('Quality Fitted Hat').should('be.visible')

    })

    it('should add the correct quantity of an item to the cart ',()=>{
        //clear the input of the chosen item

        Product.changProdQty('3')
        Product.addProductToCart('3')

        cy.get(Product.cartSummaryModal).should('be.visible')
        cy.get(Product.headerCartSummary).should('be.visible')

        cy.get(Product.prodName).contains('Quality Mug').should('exist')
        cy.get(Product.itemQty).should('have.text', '4')

    })



})