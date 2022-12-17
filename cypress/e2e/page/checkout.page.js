class CheckoutPage{

//#region Getters

//Billing section
get subheaderBilling(){ return ('h1.snipcart__font--subtitle')}

get inputFullname(){return ('[name="name"]') }

get inputEmail(){ return ('[name="email"]')}

get inputStrAdd(){ return ('div.snipcart-textbox:nth-child(2)')}

get inputApt(){ return ('[name="address2"]')}

get inputCity(){ return ('[name="city"]')}

get buttonContinuePay(){ return ('button.snipcart-button-primary.snipcart-submit.snipcart-base-button.is-icon-right')}

get inputPostalCode(){ return ('[name="postalCode"]')}


//Payment section

get inputCardNumber(){ return ('input#card-number')}

get inputCardExpiry(){return ('input#expiry-date')}

get inputCardCVV(){return ('input#cvv')}

get buttonPlaceOrder(){ return ('button.snipcart-button-primary.snipcart-submit.snipcart-base-button.is-icon-right')}


//Order summary
get headerOrderSummary(){ return ('h1.snipcart-cart-summary__title.snipcart__font--subtitle')}

get linkEditCart(){ return ('button.snipcart-button-link')}

get orderName(){ return ('snipcart-cart-summary-items-list li:nth-child(1) span.snipcart-cart-summary-item__name')}

get orderQty(){ return ('snipcart-cart-summary-items-list li:nth-child(1) span.snipcart-cart-summary-item__quantity')}

get itemTotal(){ return ('snipcart-cart-summary-items-list li:nth-child(1) span.snipcart-cart-summary-item__price')}

get cartTotal(){return ('div.snipcart-summary-fees__item.snipcart-summary-fees__total')}


//#endregion


//#region Methods

filloutBillingForm(name,email,address,city,postalcode){
    cy.get(this.inputFullname).type(name)
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputStrAdd).type(address)
    cy.get(this.inputCity).type(city)

    //select country as US and a state
    cy.get('input.snipcart-typeahead__dropdown').eq(1).type('United States{enter}', {force: true})
    cy.get('input.snipcart-typeahead__dropdown').eq(2).type('Alaska{enter}', {force: true})

    cy.get(this.inputPostalCode).type(postalcode)
    cy.get(this.buttonContinuePay).click()

}

fillPaymentForm(){
    cy.wait(2500) //wait for oayment iframe to load

    cy.iframe('.snipcart-payment-card-form iframe').find(this.inputCardNumber).type('4242 4242 4242 4242')
    cy.iframe('.snipcart-payment-card-form iframe').find(this.inputCardExpiry).type('0527')
    cy.iframe('.snipcart-payment-card-form iframe').find(this.inputCardCVV).type('123')


    cy.get(this.buttonPlaceOrder).click()
    cy.wait(1500)
    
}
//#endregion


}
export default new CheckoutPage()