/// <reference types="cypress" />

import ProductPage from '../page/product.page'
import FavoritesPage from '../page/favorites.page'
import Auth from '../page/auth.page'
import ProductData from '../data/product.data'
import productData from '../data/product.data'

describe('Favourites/Wishlist', ()=>{
    beforeEach(()=>{
        //cy.visit('/') //uncomment to run on your local
        //Auth.login("test123@gmail.com", "Password1!") //uncomment to run 
        //cy.url().should('eq','https://ui-automation-camp.vercel.app/products')  //uncomment to run 
        cy.visit('/products')           //comment out to run
        cy.wait(2500)                   //comment out to run
    })

    it('should add product to Favorites from the product homepage ', ()=>{
        ProductPage.checkFavButton1('10') //checks if favourites button for Quality Pink Pants is visible

        ProductPage.addProductToFav('10')
        cy.get(ProductPage.messageToast).should('have.text', 'Quality Pink Pants added to favorites')
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [1]')

        cy.get(FavoritesPage.productNameFav).contains("Quality Pink Pants").should('exist')

    })

    it('should add product to favorites from product detail page', ()=>{
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        cy.get(ProductPage.productHeader).should('be.visible').and('have.text',"Products")
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [0]')

        //click image of product to get to the product details
        ProductPage.clickImage(2)
        cy.get(ProductPage.productName).should('have.text', ProductData.products[2].prodname +" ")
        ProductPage.addProductToFavPD()
        cy.get(ProductPage.messageToast).should('have.text', `${productData.products[2].prodname} added to favorites`)
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [1]')

    })

    it('should remove product from favourite on Favourite page', ()=>{
        ProductPage.checkFavButton1('6') //checks if favourites button for  is visible

        ProductPage.addProductToFav('6')
        cy.get(ProductPage.messageToast).should('have.text', `${productData.products[6].prodname} added to favorites`)
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [1]')

        FavoritesPage.goToFavPage()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/favorites') //check that we are on the favourites page

        FavoritesPage.removeProductFrFav()
        cy.get(ProductPage.messageToast).eq(0).should('have.text', `${productData.products[6].prodname} removed from favorites`)

        cy.get(FavoritesPage.errorImg).should('exist').and('be.visible')
        cy.get(FavoritesPage.emptyPageMessage).should('be.visible').and('have.text', 'No favorites added!')
        cy.get(FavoritesPage.addFavesMsg).should('be.visible').and('have.text','You can add favorites from the home page.')

        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [0]')
    })

    it('should add single product to cart from Favourites page ', ()=>{
        ProductPage.checkFavButton1('2') //checks if favourites button for  is visible

        ProductPage.addProductToFav('2')
        cy.get(ProductPage.messageToast).should('have.text', `${productData.products[2].prodname} added to favorites`)
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [1]')

        FavoritesPage.goToFavPage()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/favorites') //check that we are on the favourites page

        FavoritesPage.addProdToCartFP()
        cy.get(FavoritesPage.cartSummaryModal).should('be.visible')
        cy.get(FavoritesPage.headerCartSummary).should('have.text', ' Cart summary ')
        cy.get(FavoritesPage.prodName).should('have.text', ` ${productData.products[2].prodname} `)
        cy.get(FavoritesPage.itemQty).should('have.text','1')
    })

    it('should remove product from favourites on Product homepage', ()=>{
        ProductPage.checkFavButton1('0') //checks if favourites button for  is visible

        ProductPage.addProductToFav('0')
        cy.get(ProductPage.messageToast).should('have.text', `${productData.products[0].prodname} added to favorites` )
        ProductPage.closeToastMsg()
        cy.get(ProductPage.messageToast).should('not.exist')

        ProductPage.checkFavButton2('0') //check if highlighted fave button is visible
        ProductPage.removeProductFrFav('0')
        cy.get(ProductPage.messageToast).should('have.text', `${productData.products[0].prodname} removed from favorites` )
        cy.get(FavoritesPage.navButtonFavourites).should('have.text', 'Favorites [0]')

    })



















})
