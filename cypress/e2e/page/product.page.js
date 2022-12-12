

class CartPage{

    //#region getters

    get storeImage(){ return ('img.css-0')}

    get storeHeader(){ return ('div > h2.css-190rmj2')}

    get addToCartButton(){ return ('button#add-to-cart')
    }

    get buttonRemove(){ return ('button.snipcart-button-icon.is-danger')}

    get messageCartEmpty(){ return ('h1.snipcart-empty-cart__title')}

    get cartCloseButton(){return ('button svg.snipcart__icon--medium')}

    get cartSummaryModal(){ return ('div.snipcart-modal')}

    get increaseProductQuantity() {return (`ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > button[title='Increment quantity']`)}

    get itemQty(){return 'ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > span'}



    
    //#endregion


    //#region methods
    closeCartSummary(){
        cy.get(this.cartCloseButton).should('be.visible')

        cy.get(this.cartCloseButton).click()
    }

    incrementProductQtyBy2(){
        cy.get(this.itemQty).should('exist')
        cy.get(this.itemQty).should('have.text','1')
        
        cy.get(this.increaseProductQuantity).click()
        cy.wait(1500)
        cy.get(this.increaseProductQuantity).click()
        cy.wait(1500)
    }


    addProductToCart(prodnum){
        let addToCartBtn = `#product-${prodnum} #add-to-cart`

        cy.get(addToCartBtn).should('exist').and('be.visible')
        cy.wait(3000)
        cy.get(addToCartBtn).click()
    }

    addFirstProductToCart(){
        cy.get(this.addToCartButton).first().scrollIntoView()
        cy.wait(3500)
        cy.get(this.addToCartButton).first().should('be.visible').click()
    }

    removeFirstProduct(){
        cy.get(this.buttonRemove).first().should('be.visible')
        cy.wait(5000)
        cy.get(this.buttonRemove).first().click()
        cy.wait(1500)
        cy.get(this.buttonRemove).should('not.exist')
    }

    //#endregion




}
export default new CartPage()