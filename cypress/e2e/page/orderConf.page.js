
class ConfirmationPage{


//#region Getters
get confMessage(){ return ('h1.snipcart__font--subtitle')}

get buttonContinueShopping(){return ('span.snipcart-modal__close-title.snipcart__font--std')}

get invoiceNumber(){ return ('snipcart-order__invoice-number')}

get cartSummaryBox(){ return ('div.snipcart__box.snipcart-order__box')}

get billingSummary(){ return ('div.snipcart__box.snipcart-billing-completed')}

get paymentSummary(){ return ('')}

get totalFooter(){ return 'footer.snipcart-order__footer'}

//#endregion


//#region Methods
//#endregion



}
export default new ConfirmationPage()