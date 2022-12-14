/// <reference types="cypress" />

import Homepage from '../page/product.page'
import Auth from '../page/auth.page'

describe('Product Gallery Homepage', ()=>{

    before(()=>{
        // cy.visit('/')
        // Auth.login('test123@gmail.com', 'Password1!')
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should check that all nav items are shown on the homepage', ()=>{
        cy.contains('Shop Now,').should('be.visible') //check that we are on homepage
        cy.get(Homepage.buttonSignout).should('be.visible')

        const buttonNames = ['Home', 'Favorites [0]', 'About','Contact','$0.00', 'Sign Out']
        cy.wait(2500)
        cy.get('button#top-sign-out').contains('Sign Out').should('exist')
        cy.get(Homepage.allNavButtons).each(($elem,index)=>{
            expect($elem.text()).equal(buttonNames[index])
        })
    })

    it('should highlight nav item for current page', ()=>{
        cy.visit('/contact')
        //navigate to contact and ensure it is highlighted in the nav
        cy.get('button').contains('Contact').should('have.class', 'css-betff9')
        cy.get('button').contains('Home').should('not.have.class', 'css-betff9')

        //navigate to home and check that Home menu item is in focus/highlighted
        cy.get('button').contains('Home').click()
        cy.get('button').contains('Contact').should('not.have.class', 'css-betff9')

    })

    it('should verify product has second image', ()=>{
        cy.visit('/products')
        Homepage.clickImage(0) //click the image of the first product
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products/quality-hat-model') //assert on the product url

        cy.get(Homepage.selectedImageLegend).should('have.text', 'Image 1')
        Homepage.toSecondImg()
        cy.get(Homepage.selectedImageLegend).should('have.text', 'Image 2')
        cy.get(Homepage.carouselStatus).should('have.text', '2 of 2')

    })


})