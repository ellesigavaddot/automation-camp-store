/// <reference types="cypress" />

import AuthPage from '../page/auth.page'

describe('Login and Sign Up', ()=> {

    before(()=>{
        cy.visit('/')
        cy.get(AuthPage.buttonSigninRegister).click()

    })

    it('should login an existing user', ()=> {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
            cy.get('[type="email"]').type("test123@gmail.com");
            cy.get('[type="password"]').type("Password1!", { log: false });
            cy.get("[name=submit]").click();
        })

    })

})