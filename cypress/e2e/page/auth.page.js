
class Auth {

//#region getters

get buttonSigninRegister(){ return ('#signInOrRegister')}

get welcomeHeader(){ return ('div.auth0-lock-header-welcome')}

get menuLogin(){ return ('div.auth0-lock-social-button-text')}
get menuSignup(){ return ('ul > li.auth0-lock-tabs-current')}

get buttonGoogleAPI(){ return ('div.auth0-lock-social-button-text')}

get inputEmail(){ return (`#1-email`)}
get inputPassword() {return ('[name="password"]')}

get linkForgetPassword(){ return ('p.auth0-lock-alternative > a')}

get buttonSubmit(){ return ('[name="submit"]')} //selector for signup button and login button

//#endregion

//#region methods

verifyAuthPage(){
    cy.get(this.welcomeHeader).should('be.visible')
}

login(email,password){
    cy.get(this.menuLogin).click()
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputPassword).type(password)
    cy.get(this.buttonSubmit).click()
}

signup(email,password){
    cy.get(this.menuSignup).click()
    cy.get(this.inputEmail).type(email)
    cy.get(this.inputPassword).type(password)
    cy.get(this.buttonSubmit).click()
}

//#endregion

}
export default new Auth()