
class Cart{

//#region Getters
get buttonCart(){ return ('button#top-cart')}

get cartItems(){ return ('ul.snipcart-item-list li')}

//get cartFirstItem(){return ('ul.snipcart-item-list li:nth-child(1)')}
// get cartScndItem() {return ('ul.snipcart-item-list li:nth-child(2)')}
// get cartThirdItem(){ return ('ul.snipcart-item-list li:nth-child(3)')}

get linkDetailedCart(){return ('button.snipcart-button-link')}

get buttonCheckout(){ return ('button.snipcart-button-primary')}


//#endregion


//#region Methods
clickCartLink(){
    cy.get(this.linkDetailedCart).should('be.visible')

    cy.get(this.linkDetailedCart).click()
    cy.wait(1500)

}

toCart(){
    cy.get(this.buttonCart).should('be.visible')
    cy.wait(2000)
    cy.get(this.buttonCart).click()
    cy.wait(2500)
}


//#endregion

}
export default new Cart()