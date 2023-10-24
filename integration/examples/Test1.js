/// <reference types="Cypress" />

describe('Titulo', () => {
    it('Descripcion', () => {
      
        //test 
        //pagina web
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
        //box de busqueda e introducir el texto "ca"
        cy.get('.search-keyword').type('ca')
        //tiempo de espera para dejar que se muestre todos los resultados
        cy.wait(1000)
        //creamos una restrccion para seleccionar los 4 resultados obviando uno que no es visible ( por eso el visible)
        cy.get('.product:visible').should('have.length',4)

        //var
        cy.get('.products').as('productLocator')
        //posicionamiento

        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Ca'))
        {
            cy.wrap($el).find('button').click()
        }
    }

    
    )})})
  