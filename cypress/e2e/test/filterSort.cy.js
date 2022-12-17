/// <reference types="cypress" />

import Auth from '../page/auth.page'
import ProductPage from '../page/product.page'
import productData from '../data/product.data'

describe('Sort and Filter Products', ()=>{

    beforeEach(()=>{
        // cy.visit('/')
        // Auth.login('test123@gmail.com','Password1!')
        cy.visit('/products')
        cy.wait(1500)

    })

    it('should sort products from A to Z', ()=>{

        cy.get('label').contains('Sort Options').should('exist').and('be.visible')

        ProductPage.selectSort(productData.sorts["A to Z"])

        productData.products.sort()

        cy.get(ProductPage.names).each(($elem, index)=>{
            expect($elem.text()).equal(productData.products[index].prodname)
        })

    })

    it.only('should filter products by category', ()=>{

        cy.get(ProductPage.categoryFilter).select('shirt')

        cy.get('div.chakra-select__wrapper.css-42b2qy').eq(1).should('have.text', 'Shirts') //check that Shirts is now displayed in the category
        cy.get(ProductPage.itemcategoryTag).each(($elem)=> {
            expect($elem.text()).equal('shirt')
        })


    })

    it('should apply sort to a filtered products', ()=>{




    })

})