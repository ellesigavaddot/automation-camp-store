
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

//#endregion

//#region Methods

submitContactForm(){
    cy.get(this.inputFirstname).should('be.visible')

    cy.get(this.inputFirstname).type('Test')
    cy.get(this.inputLastname).type('Test')
    cy.get(this.inputEmail).type('Test123@gmail.com')
    cy.get(this.inputSubject).type('Test subject')
    cy.get(this.inputFirstname).type('This is a test message')

    cy.get(this.buttonSendMsg).click()

}
//#endregion


}
export default new ContactPage()