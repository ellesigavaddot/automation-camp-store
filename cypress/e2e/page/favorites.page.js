
class WishlistPage{

//#region Getters

get navButtonFavourites(){ return ('#top-favorite')}

get headerFavorites(){ return ('div.chakra-container.css-1326l4r > h2')}
//text = "You can add favorites from the home page."

get messageToast(){return ('ul#chakra-toast-manager-top-right li.chakra-toast')} //toast

get emptyPageMessage(){ return ('div.chakra-stack.css-owjkmg > h2.chakra-heading.css-kmq9po')} //gets the header message when there are no products added to the screen
//text = "No favorites added!"

get errorImg(){ return ('div.chakra-stack.css-owjkmg svg')}

get addFavesMsg(){ return ('div.chakra-stack.css-owjkmg > p')} //gets the paragraph text on empty favourites page
//text = "You can add favorites from the home page."

get btnRemoveProduct(){ return ('button#remove-favorite-btn')}

get buttonAddToCart(){ return ('button#add-to-cart') } //from faves

get productNameFav(){ return ('div.chakra-stack.css-uaqjf div.chakra-stack.css-n21gh5 p')}

//cart summary selectors from Fav page
get cartCloseButton(){return ('button svg.snipcart__icon--medium')}

get cartSummaryModal(){ return ('div.snipcart-modal')}

get headerCartSummary(){ return ('h1.snipcart__font--secondary')}

get increaseProductQuantity() {return (`ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > button[title='Increment quantity']`)}

get itemQty(){return ('ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > span')}

get prodName(){ return ('ul.snipcart-item-list li.snipcart-item-line h2')}

//#endregion


//#region Methods

goToFavPage(){
    cy.get(this.navButtonFavourites).should('be.visible')
    cy.get(this.navButtonFavourites).click()
}

//remove a product on Favourite screen
removeProductFrFav(){
    cy.get(this.btnRemoveProduct).should('exist').and('be.visible')
    cy.get(this.btnRemoveProduct).click()
}

//add product from cart on Favourites page 
addProdToCartFP(){
    cy.get(this.buttonAddToCart).first().should('be.visible')
    cy.get(this.buttonAddToCart).first().click()

}


//#endregion

}
export default new WishlistPage()