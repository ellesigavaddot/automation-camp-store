/// <reference types="cypress" />

import Homepage from '../page/product.page'

describe('Product Gallery Homepage', ()=>{

    beforeEach(()=>{
        cy.visit('/products')
        cy.wait(2500)
    })

    it('should be on products homepage', ()=>{

    })








})