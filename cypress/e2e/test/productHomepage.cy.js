/// <reference types="cypress" />

import Homepage from '../page/product.page'

describe('Product Gallery Homepage', ()=>{

    before(()=>{
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should check that all nav items are shown on the homepage', ()=>{
        cy.contains('Shop Now,').should('be.visible') //check that we are on homepage
        cy.get(Homepage.buttonSignout).should('be.visible')

        const buttonNames = ['Home', 'About','Contact','$0.00', 'Sign Out']
        cy.wait(2500)
        cy.get('button#top-sign-out').contains('Sign Out').should('exist')
        cy.get(Homepage.allNavButtons).each(($elem,index)=>{
            expect($elem.text()).equal(buttonNames[index])
        })
    })

    it('should highlight nav item for current page', ()=>{
        cy.visit('/contact')
        cy.get('button').contains('Contact').should('have.class', 'css-betff9')
        cy.get('button').contains('Home').should('not.have.class', 'css-betff9')

        cy.get('button').contains('Home').click()
        cy.get('button').contains('Contact').should('not.have.class', 'css-betff9')

    })

    it('should verify product has second image', ()=>{
        cy.visit('/products')
        Homepage.clickImage(0)
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products/quality-hat-model')

        cy.get(Homepage.selectedImageLegend).should('have.text', 'Image 1')
        Homepage.toSecondImg()
        cy.get(Homepage.selectedImageLegend).should('have.text', 'Image 2')
        cy.get(Homepage.carouselStatus).should('have.text', '2 of 2')

    })


})