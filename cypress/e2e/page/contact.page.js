
class ContactPage{

//#region Getters

get callToContact(){ return ('h2.chakra-heading.css-z59od')}

get emailContact(){ return ('')}

get inputFirstname(){ return ('input#firstName')}

get inputLastname(){ return ('input#lastName')}

get inputEmail(){ return ('input#email')}

get inputSubject(){ return ('input#subject')}

get textareaMessage(){ return ('textarea#message')}

get buttonSendMsg(){ return ('div.css-g0ymzp button')}

get toastMessage(){ return ('div.chakra-toast__inner.css-dixmdy')}

get errorFieldRqd(){ return ('')}

get invalidEmailMsg(){ return (`div.chakra-form__error-message`)}

get infoStack(){ return ('div.css-103gdes div.chakra-stack.css-r2h33i a')}

get infoCTA(){ return ('div.css-103gdes p')}

get buttonsInfoStack(){ return ('button.chakra-button.css-1vqlvie')}

//#endregion

//#region Methods

submitContactForm(email){
    cy.get(this.inputFirstname).should('be.visible')

    cy.get(this.inputFirstname).type('Test')
    cy.get(this.inputLastname).type('Test')
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputSubject).type('Test subject')
    cy.get(this.textareaMessage).type('This is a test message')

    cy.get(this.buttonSendMsg).click()
    cy.wait(1500)

}
//#endregion


}
export default new ContactPage()