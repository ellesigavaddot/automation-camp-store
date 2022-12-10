

class CartPage{

    //#region getters

    get storeImage(){ return ('img.css-0')}

    get storeHeader(){ return ('div > h2.css-190rmj2')}

    get addToCartButton(){ return ('button#add-to-cart')
    }

    get buttonRemove(){ return ('button.snipcart-button-icon.is-danger')}

    get messageCartEmpty(){ return ('//h1[text()=" Your cart is empty. "]')}

    
    //#endregion


    //#region methods

    addFirstProductToCart(){
        cy.get(this.addToCartButton).first().scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartButton).first().should('be.visible').click()
    }

    removeFirstProduct(){
        cy.get(this.buttonRemove).first().should('be.visible')
        cy.get(this.buttonRemove).first().click()
        cy.wait(1500)
        cy.get(this.buttonRemove).should('not.exist')
    }

    //#endregion




}
export default new CartPage()