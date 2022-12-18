
class HomePage{

    //#region getters

    get storeImage(){ return ('img.css-0')}

    get storeHeader(){ return ('div > h2.css-190rmj2')}

    get buttonSignout(){ return ('#top-sign-out')}

    get productHeader(){ return ('h2.chakra-heading.css-1jhlc8u')}

    get addToCartButton(){ return ('button#add-to-cart')}

    get names(){ return ('div > div.chakra-stack.css-1oeb4ru > p')} //selects all items names on the product page

    get categoryFilter(){ return ('#category')}

    get itemcategoryTag(){ return ('p + span.css-1ccau2i')}

    //Cart Modal getters

    get buttonRemove(){ return ('button.snipcart-button-icon.is-danger')}

    get messageCartEmpty(){ return ('h1.snipcart-empty-cart__title')}

    get cartCloseButton(){return ('button svg.snipcart__icon--medium')}

    get cartSummaryModal(){ return ('div.snipcart-modal')}

    get headerCartSummary(){ return ('h1.snipcart__font--secondary')}

    get increaseProductQuantity() {return (`ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > button[title='Increment quantity']`)}

    get itemQty(){return ('ul.snipcart-item-list li:nth-child(1) div.snipcart-item-quantity__quantity > span')}

    get prodName(){ return ('ul.snipcart-item-list li.snipcart-item-line h2')}

    get inputQty(){ return ('#product-0 input.chakra-numberinput__field')}

    get buttonCheckoutCartSummary(){ return ('button.snipcart-button-primary.snipcart-base-button.is-icon-right')}

    //Product Detail Selectors
    get productName(){ return ('div.css-1p34w40 h2.chakra-heading.css-1dklj6k')}

    get productDescrpt(){ return ('div.chakra-stack.css-84zodg + p')}

    get productPrice(){ return ('div.chakra-stack.css-egoftb > div:nth-child(3) > p:nth-child(2)')}

    get buttonBackToProduct(){ return ('div.chakra-stack.css-dpkrn2 h2')}

    get allNavButtons(){ return ('div.css-0 div.chakra-stack.css-7di1ue button') }

    get dotImgCntrl1(){ return ('ul.control-dots li:nth-child(1)')}
    
    get dotImgCntrl2(){ return ('ul.control-dots li:nth-child(2)')}

    get selectedImageLegend(){ return ('li.slide.selected div p')}

    get carouselStatus(){ return ('p.carousel-status')}

    get relatedProductsImgs(){ return ('div.css-12qzrsi img')}

    get headerRelatedProducts(){ return ('h2.chakra-heading.css-1dklj6k')}

    get inputQtyPD(){ return ('div.chakra-stack.css-egoftb div.chakra-numberinput input')}

    get buttonContactNav(){ return ('#top-contact')}

    get selectSortDropDown(){ return ('#sort')}




    //getter for search
    get inputSearch(){ return ('#search')}

    get productDiv(){ return ('div.chakra-stack.css-uaqjf')}

    //#endregion


    //#region methods

    //increase product quantity by a number accepted by the user on product detail(PD) screen
    increaseProdQtyPD(number){
        cy.get(this.inputQtyPD).should('be.visible')
        cy.get(this.inputQtyPD).clear()
        cy.get(this.inputQtyPD).type(number)
        cy.get(this.inputQtyPD)
        cy.get(this.inputQtyPD).should('have.attr', 'value', number)

        cy.wait(1500)
        cy.get(this.addToCartButton).click()
    }

    closeCartSummary(){
        cy.get(this.cartCloseButton).should('be.visible')

        cy.get(this.cartCloseButton).click()
    }

    //update product quantity by click the quanity arrowa
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

    //update product quantity by typing into the input field
    changProdQty(product){
        let inputQty = `#product-${product} input.chakra-numberinput__field`

        cy.get(inputQty).should('be.visible').and('have.value', '1')
        cy.get(inputQty).clear()
        cy.get(inputQty).type('4 {enter}')
    }

    clickImage(productindex){
        let prodImg = `div#product-${productindex} div.css-5ge9zd div.chakra-aspect-ratio.css-791950 img`

        cy.get(prodImg).should('exist').and('be.visible')
        cy.get(prodImg).click()
        cy.wait(2500)
    }

    toSecondImg(){
        cy.get(this.dotImgCntrl1).should('be.visible')
        cy.get(this.dotImgCntrl2).click()
        cy.wait(1500)
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

    backToProducts(){
        cy.get(this.buttonBackToProduct).should('be.visible')
        cy.get(this.buttonBackToProduct).click()
        cy.wait(1500)
    }

    typeInSearch(searchword){

        cy.get(this.inputSearch).should('be.visible')
        cy.get(this.inputSearch).type(searchword)
    }

    clearSearch(){

        cy.get(this.inputSearch).should('be.visible')
        cy.get(this.inputSearch).clear()
    }

    typeSpaceInSearch(){
        cy.get(this.inputSearch).should('be.visible')
        cy.get(this.inputSearch).type('{space}')
    }

    checkoutFromCartModal(){
        cy.get(this.buttonCheckoutCartSummary).should('be.visible')

        cy.get(this.buttonCheckoutCartSummary).click()
        cy.wait(1500)
    }

    //callback - returns the needed sort and 
    selectSort(sort){
        cy.get(this.selectSortDropDown).select(sort)
    }



    //#endregion




}
export default new HomePage()
