
class HomePage{

    //#region getters

    get storeImage(){ return ('img.css-0')}

    get storeHeader(){ return ('div > h2.css-190rmj2')}

    get buttonSignout(){ return ('#top-sign-out')}

    get addToCartButton(){ return ('button#add-to-cart')}

    get buttonRemove(){ return ('button.snipcart-button-icon.is-danger')}

    get messageCartEmpty(){ return ('h1.snipcart-empty-cart__title')}

    get cartCloseButton(){return ('button svg.snipcart__icon--medium')}

    get cartSummaryModal(){ return ('div.snipcart-modal')}

    get headerCartSummary(){ return ('h1.snipcart__font--secondary')}

    get increaseProductQuantity() {return (`ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > button[title='Increment quantity']`)}

    get itemQty(){return 'ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > span'}

    get prodName(){ return ('ul.snipcart-item-list li.snipcart-item-line h2')}

    get inputQty(){ return ('#product-0 input.chakra-numberinput__field')}

    get buttonContactNav(){ return ('#top-contact')}



    
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

    addProductToCart(product){
        let addToCartBtn = `#product-${product} #add-to-cart`

        cy.get(addToCartBtn).should('exist').and('be.visible')
        cy.wait(3000)
        cy.get(addToCartBtn).click()
    }

    changProdQty(product){

        let inputQty = `#product-${product} input.chakra-numberinput__field`

        cy.get(inputQty).should('be.visible').and('have.value', '1')
        cy.get(inputQty).clear()
        cy.get(inputQty).type('4')
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

    signOut(){
        cy.get(this.buttonSignout).should('be.visible')

        cy.get(this.buttonSignout).click()
        cy.wait(1500)
    }

    // increaseQty(product){
    //     let inputQty1 = `#product-${product} input.chakra-numberinput__field `

    //     cy.get(inputQty)
    // }


    //#endregion




}
export default new HomePage()