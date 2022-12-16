/// <reference types="cypress" />
import ContactPage from '../page/contact.page'
import Homepage from '../page/product.page'


describe('Contact Page - ',()=>{
    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(1500)
        cy.get(Homepage.buttonContactNav).click()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/contact')

    })

    it('should submit completed contact form', ()=>{

        cy.get(ContactPage.callToContact).should('exist').and('be.visible')
        ContactPage.submitContactForm('test123@gmail.com')
        cy.get(ContactPage.toastMessage).should('have.text','Message Sent!Your message has been sent!')
    })

    it('should not submit contact for with invalid email address', ()=>{

        ContactPage.submitContactForm('products@')
        cy.get(ContactPage.invalidEmailMsg).should('be.visible')

    })

    it('should verify the three platfoms on the contact page - Email, LinkedIn and Twitter  ', ()=>{
        
        const ctaText = "Reach out to me using any one of the platforms below!"
        cy.get(ContactPage.callToContact).should('exist').and('be.visible')
        cy.get(ContactPage.infoCTA).first().should('exist').and('be.visible').and('have.text', ctaText)

        cy.get(ContactPage.infoStack).contains('info@qualityworkscg.com').should('exist').and('be.visible')
        cy.get(ContactPage.infoStack).contains('Linkedin').should('be.visible')
        cy.get(ContactPage.infoStack).contains('Twitter').should('be.visible')

        cy.get(ContactPage.infoStack).each(($elem)=>{
            cy.wrap($elem).should('have.attr', 'href')
        })

    })


    








})