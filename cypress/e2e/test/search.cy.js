/// <reference types="cypress" />

import ProductPage from '../page/product.page'

describe('Product Search', ()=>{

    beforeEach(()=>{
        // cy.visit('/')  //uncomment to run locally
        // Auth.login('test123@gmail.com','Password1!') //uncomment to run locally
        cy.visit('/products') //commment out to run
        cy.wait(1500) //commment out to run

    })

    it('should verify search is not case-sensitive', ()=>{
        const searchhAt = "hAt"
        const searchHAT = "HAT"

        ProductPage.typeInSearch(searchhAt)
        //cy.get(ProductPage.productDiv).its('length').should('lte', 2)
        cy.get(ProductPage.productDiv).eq(0).contains('Hat').should('have.text', 'Quality Fitted Hat')
        cy.get(ProductPage.productDiv).eq(1).contains('Hat').should('have.text', 'Quality Trucker Hat')

        ProductPage.clearSearch()
    
        ProductPage.typeInSearch(searchHAT)
        //cy.get(ProductPage.productDiv).should('eq', '2')
        cy.get(ProductPage.productDiv).eq(0).contains('Hat').should('have.text', 'Quality Fitted Hat')
        cy.get(ProductPage.productDiv).eq(1).contains('Hat').should('have.text', 'Quality Trucker Hat')


    })

    it('should return no products when special character', ()=>{

        ProductPage.typeInSearch('.')
        cy.get(ProductPage.productDiv).should("not.exist")

        cy.get(ProductPage.productHeader).should('have.text', 'Products')
    })

    it('should not return products with search word incorrectly spelt', ()=>{
        const wrongSpelling = "qulity"

        ProductPage.typeInSearch(wrongSpelling)
        cy.get(ProductPage.productDiv).should("not.exist")

        ProductPage.clearSearch()
        cy.get(ProductPage.productDiv).should('exist')

    })




})