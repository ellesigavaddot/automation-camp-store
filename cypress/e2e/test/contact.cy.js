/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import ContactPage from '../page/contact.page'

// const randomName = faker.name.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


describe('Contact Page - ',()=>{
    before(()=>{
        cy.visit('/products')
    })

    it('should not submit contact form with invalid email', ()=>{
        //const invalidEmail = faker.internet
        // const fName = faker.name.firstName
        // const lName = faker.name.lastName
        // const email = faker.internet.email
        // let contactSubject = "The is the subject"
        // let message = "Reach out to me at 555-555-555 or test123@gmail.com! I'm interested in providing you with some great products"
        cy.visit('/contact')

        cy.url().should('be')
        ContactPage.submitContactForm()
        cy.wait(2500)
        cy.get(ContactPage.toastMessage).should('have.text','Message Sent! Your message has been sent!')

    })








})