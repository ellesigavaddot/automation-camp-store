
class CheckoutPage{

//#region Getters

//Billing section
get subheaderBilling(){ return ('h1.snipcart__font--subtitle')}

get inputFullname(){return ('[name="name"]') }

get inputEmail(){ return ('[name="email"]')}

get inputStrAdd(){ return ('div.snipcart-textbox:nth-child(2)')}

get inputApt(){ return ('input#address2_8c0ebc01-a93f-491a-b439-b2c40a319df2')}

get inputCity(){ return ('input#address2_8c0ebc01-a93f-491a-b439-b2c40a319df2')}

get buttonContinuePay(){ return ('button.snipcart-button-primary.snipcart-submit.snipcart-base-button.is-icon-right')}


//Payment section

get inputCardNumber(){ return ('input#card-number.snipcart-payment-form__input')}

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
//#endregion


}
export default new CheckoutPage()