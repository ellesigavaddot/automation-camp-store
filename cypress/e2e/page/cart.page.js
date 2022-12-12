
class Cart{

//#region Getters
get buttonCart(){ return ('button#top-cart')}

get cartItems(){ return ('ul.snipcart-item-list li')}

get cartFirstItem(){return ('ul.snipcart-item-list li:nth-child(1)')}
get cartScndItem() {return ('ul.snipcart-item-list li:nth-child(2)')}
get cartThirdItem(){ return ('ul.snipcart-item-list li:nth-child(3)')}

//#endregion


//#region Methods
toCart(){
    cy.get(this.buttonCart).should('be.visible')
    cy.wait(2000)
    cy.get(this.buttonCart).click()
}


//#endregion

}
export default new Cart()